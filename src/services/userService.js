import { Platform } from 'react-native';

// 🔥 IMPORTANT: Apna PC ka IP yaha daalo (same WiFi hona chahiye)
const LOCAL_IP = "192.168.1.5"; // 👈 CHANGE THIS

const API_BASE =
  Platform.OS === "android"
    ? `http://${LOCAL_IP}:5000/api`
    : "http://localhost:5000/api";

console.log("📡 API_BASE:", API_BASE);

// ---------------- TOKEN ----------------
export const getToken = () => {
  return "dummy-token";
};

// ---------------- COMMON RESPONSE HANDLER ----------------
const handleResponse = async (res) => {
  if (!res.ok) {
    let errorData = {};
    try {
      errorData = await res.json();
    } catch (e) { }

    const message =
      errorData.message ||
      `HTTP ${res.status}`;

    throw new Error(message);
  }
  return res.json();
};

// ---------------- HEALTH CHECK ----------------
export const checkBackendHealth = async () => {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return handleResponse(res);
  } catch (err) {
    console.log("❌ Health check error:", err);
    throw err;
  }
};

// ---------------- GET USERS ----------------
export const getUsers = async () => {
  try {
    const res = await fetch(`${API_BASE}/users`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "Content-Type": "application/json",
      },
    });

    return handleResponse(res);
  } catch (error) {
    console.log("❌ getUsers error:", error);
    throw error;
  }
};

// ---------------- CREATE USER ----------------
export const createUser = async (userData) => {
  try {
    if (!userData.name || !userData.phone || !userData.email) {
      throw new Error("Name, phone, email required");
    }

    console.log("📤 Sending request:", userData);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s

    const res = await fetch(`${API_BASE}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      signal: controller.signal,
    });

    clearTimeout(timeout);

    console.log("📊 Status:", res.status);

    return handleResponse(res);
  } catch (error) {
    console.log("❌ createUser error:", error);

    if (error.name === "AbortError") {
      throw new Error("Timeout: Backend not responding");
    }

    if (error.message.includes("Network request failed")) {
      throw new Error("Network error: Check IP / backend / WiFi");
    }

    throw error;
  }
};