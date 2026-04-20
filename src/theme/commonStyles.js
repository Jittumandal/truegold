// Shared styles used across multiple screens to avoid duplication
import {StyleSheet} from 'react-native';
import {Colors} from './colors';
import {Metrics} from './metrics';

export const CommonStyles = StyleSheet.create({
  // ── Header: white bg + bottom border (7 screens) ──
  headerWithBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },

  // ── Header: white bg, no border (3 screens) ──
  headerPlain: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
    backgroundColor: Colors.white,
  },

  // ── Header: no bg, no border (3 screens) ──
  headerTransparent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Metrics.spacing.lg,
    paddingHorizontal: Metrics.spacing.lg,
    paddingBottom: Metrics.spacing.md,
  },

  // ── Back button: md spacing (7 screens) ──
  backBtnMd: {
    marginRight: Metrics.spacing.md,
    padding: Metrics.spacing.xs,
  },

  // ── Back button: sm spacing (5 screens) ──
  backBtnSm: {
    marginRight: Metrics.spacing.sm,
    padding: Metrics.spacing.xs,
  },

  // ── Back arrow icon (18 screens) ──
  backArrow: {
    fontSize: 22,
    color: Colors.text,
    fontWeight: '700',
  },

  // ── Header title: title size (6 screens) ──
  headerTitleLg: {
    fontSize: Metrics.fontSize.title,
    fontWeight: '700',
    color: Colors.text,
  },

  // ── Header title: body size (5 screens) ──
  headerTitleSm: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.text,
  },

  // ── Scrollable content area (15+ screens) ──
  content: {
    flex: 1,
  },

  // ── Content container: standard padding (7 screens) ──
  contentContainer: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingTop: Metrics.spacing.lg,
    paddingBottom: 40,
  },

  // ── Bottom bar with border (8 screens) ──
  bottomBar: {
    paddingHorizontal: Metrics.spacing.lg,
    paddingVertical: Metrics.spacing.md,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },

  // ── Input row: rounded pill style (3 screens) ──
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.full,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: Metrics.spacing.md,
    paddingVertical: Metrics.spacing.sm,
    marginBottom: Metrics.spacing.md,
    minHeight: 50,
  },

  // ── Input icon (3 screens) ──
  inputIcon: {
    fontSize: 18,
    marginRight: Metrics.spacing.sm,
    color: Colors.primary,
  },

  // ── Input value text (3 screens) ──
  inputValue: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    fontWeight: '500',
  },

  // ── TextInput field (3 screens) ──
  textInput: {
    flex: 1,
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
    padding: 0,
  },

  // ── Edit icon (3 screens) ──
  editIcon: {
    fontSize: 16,
    marginLeft: Metrics.spacing.sm,
  },

  // ── Dropdown arrow (2 screens) ──
  dropdownArrow: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginLeft: Metrics.spacing.sm,
  },

  // ── Dropdown menu (2 screens) ──
  dropdown: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: -Metrics.spacing.sm,
    marginBottom: Metrics.spacing.md,
    overflow: 'hidden',
  },

  // ── Dropdown item (2 screens) ──
  dropdownItem: {
    paddingVertical: Metrics.spacing.sm,
    paddingHorizontal: Metrics.spacing.md,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#F0F0F0',
  },

  // ── Dropdown active item (2 screens) ──
  dropdownItemActive: {
    backgroundColor: Colors.gold,
  },

  // ── Dropdown item text (2 screens) ──
  dropdownItemText: {
    fontSize: Metrics.fontSize.body,
    color: Colors.text,
  },

  // ── Dropdown active text (2 screens) ──
  dropdownItemTextActive: {
    fontWeight: '700',
  },

  // ── Card with shadow (7+ screens) ──
  card: {
    backgroundColor: Colors.white,
    borderRadius: Metrics.borderRadius.medium,
    padding: Metrics.spacing.md,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },

  // ── Save/confirm button: dark bg (4 screens) ──
  primaryButton: {
    backgroundColor: Colors.primaryDark,
    borderRadius: Metrics.borderRadius.medium,
    paddingVertical: Metrics.spacing.md,
    alignItems: 'center',
  },

  // ── Button text: white (4 screens) ──
  primaryButtonText: {
    fontSize: Metrics.fontSize.body,
    fontWeight: '700',
    color: Colors.white,
  },
});
