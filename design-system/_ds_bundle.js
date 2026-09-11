/* @ds-bundle: {"format":4,"namespace":"SpreekuurDesignSystem_5ed928","components":[{"name":"Wizard","sourcePath":"components/complex/Wizard.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"InlineNotification","sourcePath":"components/feedback/InlineNotification.jsx"},{"name":"ReadOnly","sourcePath":"components/feedback/ReadOnly.jsx"},{"name":"SkeletonListItem","sourcePath":"components/feedback/SkeletonListItem.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"RowContent","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Thumb","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Modal","sourcePath":"components/layout/Modal.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"ChatListItem","sourcePath":"components/navigation/ChatListItem.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"},{"name":"ListItem","sourcePath":"components/navigation/ListItem.jsx"},{"name":"List","sourcePath":"components/navigation/ListItem.jsx"},{"name":"ListSection","sourcePath":"components/navigation/ListSection.jsx"},{"name":"ProgressBar","sourcePath":"components/navigation/ProgressBar.jsx"},{"name":"SegmentBar","sourcePath":"components/navigation/SegmentBar.jsx"},{"name":"TabBar","sourcePath":"components/navigation/TabBar.jsx"}],"sourceHashes":{"assets/ds-runtime.js":"ec6a6ac2b08f","components/complex/Wizard.jsx":"0f984f3ab64a","components/feedback/Badge.jsx":"741b025940d3","components/feedback/EmptyState.jsx":"657f49f05c17","components/feedback/InlineNotification.jsx":"fc692c8687bc","components/feedback/ReadOnly.jsx":"aeb0008af209","components/feedback/SkeletonListItem.jsx":"811e858e5893","components/feedback/Toast.jsx":"da07e1b87450","components/forms/Button.jsx":"3d64fede826b","components/forms/Checkbox.jsx":"71e50a1371c0","components/forms/Input.jsx":"d6bd46433c99","components/forms/Radio.jsx":"a0722395890e","components/forms/Select.jsx":"c3cf54cd700a","components/forms/Textarea.jsx":"098045f34bcf","components/layout/Modal.jsx":"41f45e5a0d4e","components/navigation/Accordion.jsx":"446c8683e135","components/navigation/ChatListItem.jsx":"7f42d00d4f66","components/navigation/Header.jsx":"5e5691b18861","components/navigation/ListItem.jsx":"3a5cc1eed4c4","components/navigation/ListSection.jsx":"e5f19a58b0db","components/navigation/ProgressBar.jsx":"84ed817ccd2b","components/navigation/SegmentBar.jsx":"aa34aef52cb2","components/navigation/TabBar.jsx":"83d790b74a07","ui_kits/agent/agent-screens.jsx":"5435eebc5719","ui_kits/agent/agent-ui.jsx":"a716ff0ca9d9","ui_kits/agent/agent-widgets.jsx":"953e94f8c2f2","ui_kits/agent/design-canvas.jsx":"bd8746af6e58","ui_kits/gezondheidsinformatie/design-canvas.jsx":"bd8746af6e58","ui_kits/gezondheidsinformatie/screens.jsx":"1ff9f7396159","ui_kits/patient-app/app.jsx":"cabc5c21ad92","ui_kits/patient-app/login.jsx":"a50ca8823a24","ui_kits/patient-app/screens.jsx":"9bda1a93c164","ui_kits/patient-app/wizard.jsx":"da8323c12045","ui_kits/zelfzorgadvies/design-canvas.jsx":"bd8746af6e58","ui_kits/zelfzorgadvies/screens.jsx":"944b36222adc","whitepaper/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SpreekuurDesignSystem_5ed928 = window.SpreekuurDesignSystem_5ed928 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/ds-runtime.js
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// AUTO-GENERATED — do not edit by hand.
// Fallback in-browser render runtime mirroring the component sources (compiler
// bundle not served to plain preview). Loaded via <script type="text/babel">.
(function () {
  const {
    useState,
    useId,
    useEffect,
    useRef,
    useMemo,
    useCallback,
    Children
  } = React;

  // ===== components/forms/Button.jsx =====

  /**
   * Spreekuur Button — mirrors the ds-native button directives
   * (nds-button-primary/secondary/tertiary + delete variants), which are
   * thin wrappers over Ionic's <ion-button>.
   *
   *  variant: primary   → solid petrol teal, white text (the main CTA)
   *           secondary → outline, dark text/border (the "Vorige" companion)
   *           tertiary  → text-only, primary color (low-emphasis)
   *           delete    → solid danger
   *           delete-tertiary → text-only danger
   */
  function Button({
    children,
    variant = "primary",
    size = "md",
    expand = false,
    disabled = false,
    loading = false,
    iconLeft,
    iconRight,
    onClick,
    type = "button",
    style,
    ...rest
  }) {
    const heights = {
      sm: 40,
      md: 48,
      lg: 56
    };
    const padX = {
      sm: 16,
      md: 20,
      lg: 24
    };
    const iconOnly = !children && (iconLeft || iconRight);
    const base = {
      display: expand ? "flex" : "inline-flex",
      width: expand ? "100%" : iconOnly ? heights[size] : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: heights[size],
      padding: iconOnly ? 0 : `0 ${padX[size]}px`,
      borderRadius: "var(--radius-control)",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-semibold)",
      fontSize: size === "sm" ? 14 : 16,
      lineHeight: 1,
      cursor: disabled || loading ? "not-allowed" : "pointer",
      border: "1.5px solid transparent",
      transition: "background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)",
      WebkitTapHighlightColor: "transparent",
      userSelect: "none",
      whiteSpace: "nowrap"
    };
    const variants = {
      primary: {
        background: "var(--ion-color-primary)",
        color: "#fff",
        borderColor: "var(--ion-color-primary)"
      },
      secondary: {
        background: "transparent",
        color: "var(--ion-color-dark)",
        borderColor: "var(--ion-color-dark)"
      },
      tertiary: {
        background: "transparent",
        color: "var(--ion-color-primary)",
        borderColor: "transparent"
      },
      delete: {
        background: "var(--ion-color-danger)",
        color: "#fff",
        borderColor: "var(--ion-color-danger)"
      },
      "delete-tertiary": {
        background: "transparent",
        color: "var(--ion-color-danger)",
        borderColor: "transparent"
      }
    };
    const v = variants[variant] || variants.primary;
    const merged = {
      ...base,
      ...v,
      ...(disabled || loading ? {
        opacity: 0.45
      } : null),
      ...style
    };
    const hoverIn = ev => {
      if (disabled || loading) return;
      if (variant === "primary") ev.currentTarget.style.background = "var(--ion-color-primary-shade)";else if (variant === "delete") ev.currentTarget.style.background = "var(--ion-color-danger-shade)";else if (variant === "secondary") ev.currentTarget.style.background = "var(--ion-color-light)";else ev.currentTarget.style.background = "var(--ion-color-secondary)";
    };
    const hoverOut = ev => {
      if (disabled || loading) return;
      ev.currentTarget.style.background = v.background;
    };
    return /*#__PURE__*/React.createElement("button", _extends({
      type: type,
      disabled: disabled || loading,
      onClick: onClick,
      onMouseEnter: hoverIn,
      onMouseLeave: hoverOut,
      style: merged
    }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft && /*#__PURE__*/React.createElement("i", {
      className: iconLeft,
      "aria-hidden": "true"
    }), !loading && children, !loading && iconRight && /*#__PURE__*/React.createElement("i", {
      className: iconRight,
      "aria-hidden": "true"
    }));
  }
  function Spinner() {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 18,
        height: 18,
        border: "2px solid currentColor",
        borderTopColor: "transparent",
        borderRadius: "50%",
        display: "inline-block",
        animation: "su-spin 0.6s linear infinite"
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes su-spin{to{transform:rotate(360deg)}}`));
  }

  // ===== components/layout/Modal.jsx =====

  /**
   * Spreekuur Modal — the ds-native modal sheet. A full-bleed panel with a
   * centered title + close (X) header, a scrollable body, and an optional
   * footer holding 0, 1 or 2 stacked buttons (a solid primary action and/or a
   * tertiary text action). Also used as the options sheet for Select.
   */
  function Modal({
    title,
    onClose,
    children,
    primaryLabel,
    onPrimary,
    primaryVariant = "primary",
    primaryDisabled = false,
    secondaryLabel,
    onSecondary,
    position = "fixed",
    style
  }) {
    const hasFooter = primaryLabel || secondaryLabel;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position,
        inset: 0,
        zIndex: 1000,
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-app)",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        height: 56,
        padding: "0 8px",
        borderBottom: "1px solid var(--color-divider)",
        background: "var(--surface-card)",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, title), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Sluiten",
      style: {
        width: 40,
        height: 40,
        flex: "none",
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 20,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: 16
      }
    }, children), hasFooter && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        borderTop: "1px solid var(--color-divider)",
        background: "var(--surface-card)",
        padding: 16,
        display: "flex",
        flexDirection: "column",
        gap: 4
      }
    }, primaryLabel && /*#__PURE__*/React.createElement(Button, {
      variant: primaryVariant,
      expand: true,
      disabled: primaryDisabled,
      onClick: onPrimary
    }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(Button, {
      variant: "tertiary",
      expand: true,
      onClick: onSecondary
    }, secondaryLabel)));
  }

  // ===== components/forms/Input.jsx =====

  /**
   * Spreekuur Input — ds-native-input: Ionic md, outline fill, stacked label
   * that notches into the top border (a real border gap, no fill behind it),
   * optional suffix, character counter and error state.
   */
  function Input({
    label,
    value,
    defaultValue,
    onChange,
    placeholder,
    type = "text",
    required = false,
    disabled = false,
    error,
    suffix,
    counter = false,
    maxlength,
    style,
    ...rest
  }) {
    const [focused, setFocused] = useState(false);
    const [internal, setInternal] = useState(defaultValue ?? "");
    const id = useId();
    const isControlled = value !== undefined;
    const val = isControlled ? value : internal;
    const len = (val ?? "").length;
    const active = focused || error;
    const bw = active ? 2 : 1;
    const borderColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--color-border)";
    const labelColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--text-secondary)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 56,
        opacity: disabled ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: "100%",
        background: "var(--ion-color-white)",
        borderRadius: "var(--radius-sm)",
        padding: "0 14px"
      }
    }, /*#__PURE__*/React.createElement("input", _extends({
      id: id,
      type: type,
      value: val,
      placeholder: placeholder,
      disabled: disabled,
      maxLength: maxlength,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onChange: e => {
        if (!isControlled) setInternal(e.target.value);
        onChange && onChange(e);
      },
      style: {
        flex: 1,
        border: "none",
        outline: "none",
        background: "transparent",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)",
        minWidth: 0
      }
    }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)",
        fontSize: 16,
        whiteSpace: "nowrap"
      }
    }, suffix)), /*#__PURE__*/React.createElement("fieldset", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: "0 10px",
        borderRadius: "var(--radius-sm)",
        border: `${bw}px solid ${borderColor}`,
        pointerEvents: "none",
        minInlineSize: 0
      }
    }, label && /*#__PURE__*/React.createElement("legend", {
      style: {
        padding: 0,
        fontSize: 12,
        lineHeight: 0,
        maxWidth: "100%",
        whiteSpace: "nowrap",
        visibility: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        padding: "0 4px",
        opacity: 0
      }
    }, label, required ? " *" : ""))), label && /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      style: {
        position: "absolute",
        top: -8,
        left: 14,
        fontSize: 12,
        lineHeight: "16px",
        color: labelColor,
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }
    }, label, required && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ion-color-danger)"
      }
    }, " *"))), (error || counter) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: error ? "space-between" : "flex-end",
        gap: 12,
        marginTop: 4,
        padding: "0 4px",
        fontSize: 12,
        lineHeight: "16px"
      }
    }, error && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ion-color-danger)"
      }
    }, error), counter && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, len, maxlength ? ` / ${maxlength}` : "")));
  }

  // ===== components/forms/Textarea.jsx =====

  /**
   * Spreekuur Textarea — ds-native-textarea. Multi-line, with the same notched
   * outline as Input (real border gap, no fill behind the label), plus optional
   * required asterisk, error, character counter and disabled state.
   */
  function Textarea({
    label,
    value,
    defaultValue,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    error,
    counter = false,
    maxlength,
    rows = 4,
    style,
    ...rest
  }) {
    const [focused, setFocused] = useState(false);
    const [internal, setInternal] = useState(defaultValue ?? "");
    const id = useId();
    const isControlled = value !== undefined;
    const val = isControlled ? value : internal;
    const len = (val ?? "").length;
    const active = focused || error;
    const bw = active ? 2 : 1;
    const borderColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--color-border)";
    const labelColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--text-secondary)";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        opacity: disabled ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("textarea", _extends({
      id: id,
      rows: rows,
      value: val,
      placeholder: placeholder,
      disabled: disabled,
      maxLength: maxlength,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onChange: e => {
        if (!isControlled) setInternal(e.target.value);
        onChange && onChange(e);
      },
      style: {
        display: "block",
        width: "100%",
        boxSizing: "border-box",
        border: "none",
        outline: "none",
        background: "var(--ion-color-white)",
        borderRadius: "var(--radius-sm)",
        resize: "vertical",
        padding: "12px 14px",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)"
      }
    }, rest)), /*#__PURE__*/React.createElement("fieldset", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: "0 10px",
        borderRadius: "var(--radius-sm)",
        border: `${bw}px solid ${borderColor}`,
        pointerEvents: "none",
        minInlineSize: 0
      }
    }, label && /*#__PURE__*/React.createElement("legend", {
      style: {
        padding: 0,
        fontSize: 12,
        lineHeight: 0,
        maxWidth: "100%",
        whiteSpace: "nowrap",
        visibility: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        padding: "0 4px",
        opacity: 0
      }
    }, label, required ? " *" : ""))), label && /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      style: {
        position: "absolute",
        top: -8,
        left: 14,
        fontSize: 12,
        lineHeight: "16px",
        color: labelColor,
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }
    }, label, required && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ion-color-danger)"
      }
    }, " *"))), (error || counter) && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: error ? "space-between" : "flex-end",
        gap: 12,
        marginTop: 4,
        padding: "0 4px",
        fontSize: 12,
        lineHeight: "16px"
      }
    }, error && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ion-color-danger)"
      }
    }, error), counter && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-secondary)"
      }
    }, len, maxlength ? ` / ${maxlength}` : "")));
  }

  // ===== components/forms/Checkbox.jsx =====

  /**
   * Spreekuur Checkbox — ds-native-checkbox. Two shapes:
   *  - simple: <Checkbox label="…" /> (box + single label)
   *  - list row: pass title/subtitle/subtitleIcon/note/thumbnail to render a
   *    selectable row with the same content styling as ListItem.
   * 5px-radius box, petrol-teal when checked.
   */
  function Checkbox({
    checked = false,
    onChange,
    label,
    title,
    subtitle,
    subtitleIcon,
    note,
    thumbnail,
    disabled = false,
    id,
    style
  }) {
    const box = /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: "none",
        borderRadius: "var(--radius-xs)",
        border: checked ? "none" : "2px solid var(--color-checkbox-border)",
        background: checked ? "var(--ion-color-primary)" : "var(--ion-color-white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background var(--duration-fast) var(--ease-standard)"
      }
    }, checked && /*#__PURE__*/React.createElement("svg", {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7",
      stroke: "#fff",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })));
    const input = /*#__PURE__*/React.createElement("input", {
      id: id,
      type: "checkbox",
      checked: checked,
      disabled: disabled,
      onChange: e => onChange && onChange(e.target.checked, e),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    });

    // List-row form
    if (title != null) {
      return /*#__PURE__*/React.createElement("label", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 16px",
          minHeight: 44,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          fontFamily: "var(--font-body)",
          ...style
        }
      }, box, input, /*#__PURE__*/React.createElement(RowContent, {
        title: title,
        subtitle: subtitle,
        subtitleIcon: subtitleIcon,
        note: note
      }), thumbnail && /*#__PURE__*/React.createElement(Thumb, {
        thumbnail: thumbnail
      }));
    }

    // Simple form
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)",
        ...style
      }
    }, box, input, label && /*#__PURE__*/React.createElement("span", null, label));
  }
  function RowContent({
    title,
    subtitle,
    subtitleIcon,
    note
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)"
      }
    }, title), subtitle != null && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 14,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
      className: subtitleIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 13,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", null, subtitle)), note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--ion-color-medium-tint)"
      }
    }, note));
  }
  function Thumb({
    thumbnail
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-sm)",
        background: "var(--ion-color-light)",
        flex: "none",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, typeof thumbnail === "string" ? /*#__PURE__*/React.createElement("img", {
      src: thumbnail,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : null);
  }

  // ===== components/forms/Radio.jsx =====

  /**
   * Spreekuur Radio — ds-native-radio. Two shapes:
   *  - simple: <Radio label="…" /> (ring + single label)
   *  - list row: pass title/subtitle/subtitleIcon/note/thumbnail for a
   *    selectable row matching ListItem content styling.
   * Petrol-teal ring with a filled center dot when selected.
   */
  function Radio({
    checked = false,
    onChange,
    label,
    title,
    subtitle,
    subtitleIcon,
    note,
    thumbnail,
    name,
    value,
    disabled = false,
    id,
    style
  }) {
    const ring = /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: "none",
        borderRadius: "50%",
        border: `2px solid ${checked ? "var(--ion-color-primary)" : "var(--color-checkbox-border)"}`,
        background: "var(--ion-color-white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "border-color var(--duration-fast) var(--ease-standard)"
      }
    }, checked && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--ion-color-primary)"
      }
    }));
    const input = /*#__PURE__*/React.createElement("input", {
      id: id,
      type: "radio",
      name: name,
      value: value,
      checked: checked,
      disabled: disabled,
      onChange: e => onChange && onChange(value, e),
      style: {
        position: "absolute",
        opacity: 0,
        width: 0,
        height: 0
      }
    });
    if (title != null) {
      return /*#__PURE__*/React.createElement("label", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "10px 16px",
          minHeight: 44,
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.5 : 1,
          fontFamily: "var(--font-body)",
          ...style
        }
      }, ring, input, /*#__PURE__*/React.createElement(RowContent, {
        title: title,
        subtitle: subtitle,
        subtitleIcon: subtitleIcon,
        note: note
      }), thumbnail && /*#__PURE__*/React.createElement(Thumb, {
        thumbnail: thumbnail
      }));
    }
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 12,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)",
        ...style
      }
    }, ring, input, label && /*#__PURE__*/React.createElement("span", null, label));
  }

  // ===== components/forms/Select.jsx =====

  /**
   * Spreekuur Select — ds-native dropdown. A field that looks like an Input
   * (notched outline + floating label) with a trailing up/down chevron. Tapping
   * it opens a modal sheet of radio options (the ds-native dropdown-modal),
   * including long, wrapping option labels.
   */
  function Select({
    label,
    placeholder = "Selecteer een optie",
    options = [],
    value,
    defaultValue,
    onChange,
    required = false,
    disabled = false,
    error,
    modalTitle,
    style
  }) {
    const [open, setOpen] = useState(false);
    const [internal, setInternal] = useState(defaultValue ?? null);
    const id = useId();
    const isControlled = value !== undefined;
    const val = isControlled ? value : internal;
    const selected = options.find(o => (o.value ?? o) === val);
    const selectedLabel = selected ? selected.label ?? selected : null;
    const borderColor = error ? "var(--ion-color-danger)" : "var(--color-border)";
    const choose = v => {
      if (!isControlled) setInternal(v);
      onChange && onChange(v);
      setOpen(false);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: 56,
        opacity: disabled ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      onClick: () => !disabled && setOpen(true),
      style: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: "100%",
        background: "var(--ion-color-white)",
        borderRadius: "var(--radius-sm)",
        padding: "0 14px",
        cursor: disabled ? "not-allowed" : "pointer"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 16,
        color: selectedLabel ? "var(--text-default)" : "var(--text-placeholder)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, selectedLabel || placeholder), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-sort",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 15
      }
    })), /*#__PURE__*/React.createElement("fieldset", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: 0,
        padding: "0 10px",
        borderRadius: "var(--radius-sm)",
        border: `1px solid ${borderColor}`,
        pointerEvents: "none",
        minInlineSize: 0
      }
    }, label && /*#__PURE__*/React.createElement("legend", {
      style: {
        padding: 0,
        fontSize: 12,
        lineHeight: 0,
        maxWidth: "100%",
        whiteSpace: "nowrap",
        visibility: "hidden"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        padding: "0 4px",
        opacity: 0
      }
    }, label, required ? " *" : ""))), label && /*#__PURE__*/React.createElement("label", {
      htmlFor: id,
      style: {
        position: "absolute",
        top: -8,
        left: 14,
        fontSize: 12,
        lineHeight: "16px",
        color: error ? "var(--ion-color-danger)" : "var(--text-secondary)",
        pointerEvents: "none",
        whiteSpace: "nowrap"
      }
    }, label, required && /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--ion-color-danger)"
      }
    }, " *"))), open && /*#__PURE__*/React.createElement(Modal, {
      title: modalTitle || label || "Kies een optie",
      onClose: () => setOpen(false)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--surface-card)"
      }
    }, options.map((o, i) => {
      const ov = o.value ?? o;
      const ol = o.label ?? o;
      const on = ov === val;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        onClick: () => choose(ov),
        style: {
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          padding: "14px 16px",
          cursor: "pointer",
          borderTop: i > 0 ? "1px solid rgba(71,80,85,0.08)" : "none"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          height: 24,
          flex: "none",
          marginTop: 0,
          borderRadius: "50%",
          border: `2px solid ${on ? "var(--ion-color-primary)" : "var(--color-checkbox-border)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, on && /*#__PURE__*/React.createElement("span", {
        style: {
          width: 12,
          height: 12,
          borderRadius: "50%",
          background: "var(--ion-color-primary)"
        }
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 16,
          fontWeight: "var(--weight-semibold)",
          lineHeight: "22px",
          color: "var(--text-default)"
        }
      }, ol));
    }))));
  }

  // ===== components/navigation/Header.jsx =====

  /**
   * Spreekuur Header — the top toolbar. Two common shapes:
   *  - app header: optional back chevron + centered title + optional action
   *  - modal header: centered title + trailing close (X)
   * White background with a hairline bottom border.
   */
  function Header({
    title,
    onBack,
    onClose,
    action,
    actionIcon,
    onAction,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 56,
        padding: "0 8px",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        display: "flex",
        justifyContent: "flex-start"
      }
    }, onBack && /*#__PURE__*/React.createElement(IconBtn, {
      onClick: onBack,
      aria: "Terug"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-left"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 44,
        display: "flex",
        justifyContent: "flex-end"
      }
    }, onClose && /*#__PURE__*/React.createElement(IconBtn, {
      onClick: onClose,
      aria: "Sluiten"
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      style: {
        fontSize: 20
      }
    })), !onClose && (action || actionIcon) && /*#__PURE__*/React.createElement(IconBtn, {
      onClick: onAction,
      aria: "Actie"
    }, actionIcon ? /*#__PURE__*/React.createElement("i", {
      className: actionIcon
    }) : action)));
  }
  function IconBtn({
    children,
    onClick,
    aria
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      "aria-label": aria,
      style: {
        width: 40,
        height: 40,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "var(--radius-sm)",
        fontSize: 18
      }
    }, children);
  }

  // ===== components/navigation/ListItem.jsx =====

  const BADGE_PALETTE = {
    info: {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)"
    },
    neutral: {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)"
    },
    success: {
      bg: "var(--ion-color-success-lighter)",
      fg: "var(--ion-color-success-shade)"
    },
    warning: {
      bg: "var(--ion-color-warning-lighter)",
      fg: "var(--ion-color-warning-shade)"
    },
    danger: {
      bg: "var(--ion-color-danger-lighter)",
      fg: "var(--ion-color-danger-shade)"
    },
    primary: {
      bg: "var(--ion-color-secondary)",
      fg: "var(--ion-color-primary)"
    }
  };
  const DEFAULT_BADGE_ICON = {
    info: "fa-solid fa-circle-info",
    success: "fa-solid fa-check",
    warning: "fa-solid fa-clock",
    danger: "fa-solid fa-xmark"
  };

  /**
   * Spreekuur ListItem — recreates ds-native-list-item. A tappable white row,
   * 48px tall for a title-only row, growing as content lines are added.
   * Vertically-centered leading icon, a content block
   * (title / subtitle / status badge / note) and a trailing area
   * (notification count + detail icon). Stack rows inside <List>.
   */
  function ListItem({
    title,
    subtitle,
    subtitleIcon,
    subtitleAsPill = false,
    badge,
    badgeType = "info",
    badgeIcon,
    note,
    icon,
    thumbnail,
    notificationCount,
    detailIcon,
    showChevron = true,
    onClick,
    disabled = false,
    style
  }) {
    const badgePal = BADGE_PALETTE[badgeType] || BADGE_PALETTE.info;
    const resolvedBadgeIcon = badgeIcon === null ? null : badgeIcon || DEFAULT_BADGE_ICON[badgeType];
    const subtitleEl = subtitle != null && (subtitleAsPill ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 3,
        padding: "0 10px",
        height: 20,
        borderRadius: "var(--radius-pill)",
        background: "var(--ion-color-light-shade)",
        color: "var(--ion-color-dark)",
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: "var(--weight-medium)"
      }
    }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
      className: subtitleIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), subtitle) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        marginTop: 0,
        fontSize: 14,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
      className: subtitleIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 13,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", null, subtitle)));
    return /*#__PURE__*/React.createElement("div", {
      onClick: disabled ? undefined : onClick,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 16px",
        background: "var(--surface-card)",
        cursor: onClick && !disabled ? "pointer" : "default",
        fontFamily: "var(--font-body)",
        minHeight: 44,
        boxSizing: "border-box",
        opacity: disabled ? 0.5 : 1,
        transition: "background var(--duration-fast) var(--ease-standard)",
        ...style
      },
      onMouseEnter: e => {
        if (onClick && !disabled) e.currentTarget.style.background = "var(--ion-color-light)";
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = "var(--surface-card)";
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 16,
        width: 16,
        height: 16,
        lineHeight: "16px",
        textAlign: "center",
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)"
      }
    }, title), subtitleEl, badge && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 3,
        padding: "0 10px",
        height: 20,
        borderRadius: "var(--radius-pill)",
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: "var(--weight-medium)",
        color: badgePal.fg,
        background: badgePal.bg
      }
    }, resolvedBadgeIcon && /*#__PURE__*/React.createElement("i", {
      className: resolvedBadgeIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), badge), note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--ion-color-medium-tint)"
      }
    }, note)), thumbnail && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-sm)",
        background: "var(--ion-color-light)",
        flex: "none",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, typeof thumbnail === "string" ? /*#__PURE__*/React.createElement("img", {
      src: thumbnail,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-image",
      style: {
        color: "var(--color-placeholder)"
      },
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        flex: "none"
      }
    }, notificationCount != null && /*#__PURE__*/React.createElement("span", {
      style: {
        minWidth: 20,
        height: 20,
        padding: "0 6px",
        borderRadius: "var(--radius-pill)",
        background: "var(--ion-color-danger)",
        color: "#fff",
        fontSize: 12,
        fontWeight: "var(--weight-semibold)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        boxSizing: "border-box"
      }
    }, notificationCount), (showChevron || detailIcon) && /*#__PURE__*/React.createElement("i", {
      className: detailIcon || "fa-solid fa-chevron-right",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 16,
        width: 16,
        textAlign: "center"
      }
    })));
  }

  /**
   * List — the inset rounded container that groups ListItems with hairline
   * dividers (no shadow, no hard outer border).
   */
  function List({
    children,
    style
  }) {
    const items = React.Children.toArray(children);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        background: "var(--surface-card)",
        ...style
      }
    }, items.map((child, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: i > 0 ? {
        borderTop: "1px solid rgba(71,80,85,0.08)"
      } : undefined
    }, child)));
  }

  // ===== components/navigation/ProgressBar.jsx =====

  /**
   * Spreekuur ProgressBar — the segmented wizard progress used in the
   * bottom footer of multi-step flows. Thin teal fill on a light track,
   * with an optional "X van Y" step counter.
   */
  function ProgressBar({
    value = 0,
    currentStep,
    totalSteps,
    separator = "van",
    showCounter,
    style
  }) {
    const pct = Math.max(0, Math.min(1, value)) * 100;
    const counter = showCounter ?? (currentStep != null && totalSteps != null);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 6,
        borderRadius: "var(--radius-pill)",
        background: "var(--ion-color-secondary-shade)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${pct}%`,
        height: "100%",
        borderRadius: "var(--radius-pill)",
        background: "var(--ion-color-primary)",
        transition: "width var(--duration-slow) var(--ease-standard)"
      }
    })), counter && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        fontWeight: "var(--weight-medium)",
        color: "var(--text-secondary)",
        whiteSpace: "nowrap"
      }
    }, currentStep, " ", separator, " ", totalSteps));
  }

  // ===== components/navigation/TabBar.jsx =====

  /* The four standard patient-app tab glyphs, as outline + solid pairs so the
     active tab can switch to a filled teal icon (matching the real Pro icon set,
     which FontAwesome Free can't reproduce in outline form). */
  const ICONS = {
    house: {
      viewBox: "47.5 11.5 19 19",
      outline: "M56.5142 13.1781C56.7955 12.9406 57.2049 12.9406 57.4861 13.1781L65.7361 20.1781C66.0517 20.4469 66.0924 20.9187 65.8236 21.2344C65.5549 21.55 65.083 21.5875 64.7674 21.3219L63.9986 20.6719V26.5C63.9986 27.8813 62.8799 29 61.4986 29H52.4986C51.1174 29 49.9986 27.8813 49.9986 26.5V20.6719L49.233 21.3219C48.9174 21.5906 48.4424 21.55 48.1767 21.2344C47.9111 20.9187 47.9486 20.4437 48.2642 20.1781L56.5142 13.1781ZM56.9986 14.7344L51.4986 19.4V26.5C51.4986 27.0531 51.9455 27.5 52.4986 27.5H53.9986V22.75C53.9986 22.0594 54.558 21.5 55.2486 21.5H58.7486C59.4392 21.5 59.9986 22.0594 59.9986 22.75V27.5H61.4986C62.0517 27.5 62.4986 27.0531 62.4986 26.5V19.4L56.9986 14.7344ZM55.4986 27.5H58.4986V23H55.4986V27.5Z",
      solid: "M65.9953 20.9851C65.9953 21.5476 65.5265 21.9883 64.9952 21.9883H63.9951L64.017 26.9949C64.017 27.0793 64.0107 27.1637 64.0014 27.2481V27.7513C64.0014 28.4419 63.4419 29.0014 62.7513 29.0014H62.2512C62.2168 29.0014 62.1825 29.0014 62.1481 28.9982C62.1043 29.0014 62.0606 29.0014 62.0168 29.0014H61.0011H60.251C59.5604 29.0014 59.0009 28.4419 59.0009 27.7513V27.0012V25.001C59.0009 24.4478 58.554 24.0009 58.0009 24.0009H56.0007C55.4475 24.0009 55.0006 24.4478 55.0006 25.001V27.0012V27.7513C55.0006 28.4419 54.4412 29.0014 53.7505 29.0014H53.0004H52.0035C51.9566 29.0014 51.9097 28.9982 51.8628 28.9951C51.8253 28.9982 51.7878 29.0014 51.7503 29.0014H51.2503C50.5596 29.0014 50.0002 28.4419 50.0002 27.7513V24.251C50.0002 24.2228 50.0002 24.1916 50.0033 24.1635V21.9883H49.0001C48.4375 21.9883 48 21.5507 48 20.9851C48 20.7038 48.0938 20.4538 48.3125 20.235L56.3257 13.25C56.5445 13.0313 56.7945 13 57.0133 13C57.232 13 57.4821 13.0625 57.6696 13.2188L65.6515 20.235C65.9015 20.4538 66.0265 20.7038 65.9953 20.9851Z"
    },
    chat: {
      viewBox: "129.5 11.5 19 19",
      outline: "M136.256 25.0281C135.787 24.8594 135.266 24.9312 134.862 25.2281C134.606 25.4156 134.166 25.6906 133.631 25.9375C133.806 25.4781 133.941 24.9594 133.984 24.3938C134.016 23.9906 133.881 23.5906 133.616 23.2844C132.887 22.4625 132.5 21.5 132.5 20.5C132.5 18.0156 135.103 15.5 139 15.5C142.897 15.5 145.5 18.0156 145.5 20.5C145.5 22.9844 142.897 25.5 139 25.5C138.012 25.5 137.084 25.3281 136.256 25.0281ZM131.822 26.2437C131.772 26.3281 131.719 26.4125 131.663 26.4969L131.653 26.5125C131.603 26.5844 131.553 26.6562 131.503 26.7281C131.394 26.875 131.275 27.0187 131.15 27.15C131.006 27.2937 130.966 27.5063 131.044 27.6938C131.122 27.8813 131.303 28.0031 131.506 28.0031C131.666 28.0031 131.825 27.9937 131.984 27.9781L132.006 27.975C132.144 27.9594 132.281 27.9406 132.419 27.9156C132.444 27.9125 132.469 27.9062 132.494 27.9C133.05 27.7906 133.584 27.6031 134.059 27.3969C134.775 27.0844 135.384 26.7125 135.756 26.4406C136.75 26.8 137.85 27 139.009 27C143.428 27 147.009 24.0906 147.009 20.5C147.009 16.9094 143.419 14 139 14C134.581 14 131 16.9094 131 20.5C131 21.9094 131.553 23.2125 132.491 24.2781C132.431 25.0437 132.134 25.725 131.822 26.2437ZM135.5 21.5C135.765 21.5 136.02 21.3946 136.207 21.2071C136.395 21.0196 136.5 20.7652 136.5 20.5C136.5 20.2348 136.395 19.9804 136.207 19.7929C136.02 19.6054 135.765 19.5 135.5 19.5C135.235 19.5 134.98 19.6054 134.793 19.7929C134.605 19.9804 134.5 20.2348 134.5 20.5C134.5 20.7652 134.605 21.0196 134.793 21.2071C134.98 21.3946 135.235 21.5 135.5 21.5ZM140 20.5C140 20.2348 139.895 19.9804 139.707 19.7929C139.52 19.6054 139.265 19.5 139 19.5C138.735 19.5 138.48 19.6054 138.293 19.7929C138.105 19.9804 138 20.2348 138 20.5C138 20.7652 138.105 21.0196 138.293 21.2071C138.48 21.3946 138.735 21.5 139 21.5C139.265 21.5 139.52 21.3946 139.707 21.2071C139.895 21.0196 140 20.7652 140 20.5ZM142.5 21.5C142.765 21.5 143.02 21.3946 143.207 21.2071C143.395 21.0196 143.5 20.7652 143.5 20.5C143.5 20.2348 143.395 19.9804 143.207 19.7929C143.02 19.6054 142.765 19.5 142.5 19.5C142.235 19.5 141.98 19.6054 141.793 19.7929C141.605 19.9804 141.5 20.2348 141.5 20.5C141.5 20.7652 141.605 21.0196 141.793 21.2071C141.98 21.3946 142.235 21.5 142.5 21.5Z",
      solid: "M139.002 27C143.42 27 147.002 24.0906 147.002 20.5C147.002 16.9094 143.42 14 139.002 14C134.583 14 131.002 16.9094 131.002 20.5C131.002 21.9094 131.555 23.2125 132.492 24.2781C132.433 25.0437 132.136 25.725 131.823 26.2437C131.652 26.5312 131.477 26.7625 131.348 26.9187C131.283 26.9969 131.233 27.0563 131.195 27.0969C131.177 27.1156 131.164 27.1312 131.155 27.1406L131.145 27.15C131.002 27.2937 130.961 27.5063 131.039 27.6938C131.117 27.8813 131.298 28.0031 131.502 28.0031C132.398 28.0031 133.302 27.725 134.052 27.4C134.767 27.0875 135.377 26.7156 135.748 26.4438C136.742 26.8031 137.842 27.0031 139.002 27.0031V27ZM135.002 19.5C135.267 19.5 135.521 19.6054 135.709 19.7929C135.896 19.9804 136.002 20.2348 136.002 20.5C136.002 20.7652 135.896 21.0196 135.709 21.2071C135.521 21.3946 135.267 21.5 135.002 21.5C134.736 21.5 134.482 21.3946 134.295 21.2071C134.107 21.0196 134.002 20.7652 134.002 20.5C134.002 20.2348 134.107 19.9804 134.295 19.7929C134.482 19.6054 134.736 19.5 135.002 19.5ZM139.002 19.5C139.267 19.5 139.521 19.6054 139.709 19.7929C139.896 19.9804 140.002 20.2348 140.002 20.5C140.002 20.7652 139.896 21.0196 139.709 21.2071C139.521 21.3946 139.267 21.5 139.002 21.5C138.736 21.5 138.482 21.3946 138.295 21.2071C138.107 21.0196 138.002 20.7652 138.002 20.5C138.002 20.2348 138.107 19.9804 138.295 19.7929C138.482 19.6054 138.736 19.5 139.002 19.5ZM142.002 20.5C142.002 20.2348 142.107 19.9804 142.295 19.7929C142.482 19.6054 142.736 19.5 143.002 19.5C143.267 19.5 143.521 19.6054 143.709 19.7929C143.896 19.9804 144.002 20.2348 144.002 20.5C144.002 20.7652 143.896 21.0196 143.709 21.2071C143.521 21.3946 143.267 21.5 143.002 21.5C142.736 21.5 142.482 21.3946 142.295 21.2071C142.107 21.0196 142.002 20.7652 142.002 20.5Z"
    },
    folder: {
      viewBox: "211.5 11.5 19 19",
      outline: "M213 16C213 14.8969 213.897 14 215 14H219.128C219.725 14 220.297 14.2375 220.719 14.6594L222.059 16H227C228.103 16 229 16.8969 229 18V26C229 27.1031 228.103 28 227 28H215C213.897 28 213 27.1031 213 26V16ZM215 15.5C214.725 15.5 214.5 15.725 214.5 16V26C214.5 26.275 214.725 26.5 215 26.5H227C227.275 26.5 227.5 26.275 227.5 26V18C227.5 17.725 227.275 17.5 227 17.5H221.956C221.625 17.5 221.306 17.3688 221.072 17.1344L219.659 15.7188C219.519 15.5781 219.328 15.5 219.128 15.5H215Z",
      solid: "M214.772 19.9941L212 24.7444V16.0001C212 14.8969 212.897 14 214 14H217.672C218.204 14 218.713 14.2094 219.088 14.5844L219.916 15.4126C220.291 15.7876 220.801 15.997 221.332 15.997H225.001C226.104 15.997 227.001 16.8939 227.001 17.9971V18.9972H216.5C215.788 18.9972 215.131 19.3753 214.772 19.991V19.9941ZM215.635 20.4973C215.816 20.1879 216.144 20.0004 216.5 20.0004H229.001C229.361 20.0004 229.689 20.191 229.867 20.5035C230.045 20.8161 230.045 21.1973 229.864 21.5067L226.363 27.5071C226.185 27.8134 225.857 28.0009 225.501 28.0009H213C212.641 28.0009 212.313 27.8103 212.134 27.4978C211.956 27.1852 211.956 26.804 212.138 26.4946L215.638 20.4942L215.635 20.4973Z"
    },
    user: {
      viewBox: "293.5 11.5 19 19",
      outline: "M307.703 25.4875C307.106 24.0281 305.672 23 304 23H302C300.328 23 298.894 24.0281 298.297 25.4875C297.184 24.3188 296.5 22.7406 296.5 21C296.5 17.4094 299.409 14.5 303 14.5C306.591 14.5 309.5 17.4094 309.5 21C309.5 22.7406 308.816 24.3188 307.703 25.4875ZM306.45 26.5094C305.45 27.1375 304.269 27.5 303 27.5C301.731 27.5 300.55 27.1375 299.547 26.5094C299.775 25.3625 300.788 24.5 302 24.5H304C305.212 24.5 306.225 25.3625 306.453 26.5094H306.45ZM303 29C305.122 29 307.157 28.1571 308.657 26.6569C310.157 25.1566 311 23.1217 311 21C311 18.8783 310.157 16.8434 308.657 15.3431C307.157 13.8429 305.122 13 303 13C300.878 13 298.843 13.8429 297.343 15.3431C295.843 16.8434 295 18.8783 295 21C295 23.1217 295.843 25.1566 297.343 26.6569C298.843 28.1571 300.878 29 303 29ZM303 20.5C302.668 20.5 302.351 20.3683 302.116 20.1339C301.882 19.8995 301.75 19.5815 301.75 19.25C301.75 18.9185 301.882 18.6005 302.116 18.3661C302.351 18.1317 302.668 18 303 18C303.332 18 303.649 18.1317 303.884 18.3661C304.118 18.6005 304.25 18.9185 304.25 19.25C304.25 19.5815 304.118 19.8995 303.884 20.1339C303.649 20.3683 303.332 20.5 303 20.5ZM300.25 19.25C300.25 19.9793 300.54 20.6788 301.055 21.1945C301.571 21.7103 302.271 22 303 22C303.729 22 304.429 21.7103 304.945 21.1945C305.46 20.6788 305.75 19.9793 305.75 19.25C305.75 18.5207 305.46 17.8212 304.945 17.3055C304.429 16.7897 303.729 16.5 303 16.5C302.271 16.5 301.571 16.7897 301.055 17.3055C300.54 17.8212 300.25 18.5207 300.25 19.25Z",
      solid: "M307.469 25.0063C306.778 23.8063 305.481 23 304 23H302C300.519 23 299.222 23.8063 298.531 25.0063C299.631 26.2313 301.225 27 303 27C304.775 27 306.369 26.2281 307.469 25.0063ZM295 21C295 18.8783 295.843 16.8434 297.343 15.3431C298.843 13.8429 300.878 13 303 13C305.122 13 307.157 13.8429 308.657 15.3431C310.157 16.8434 311 18.8783 311 21C311 23.1217 310.157 25.1566 308.657 26.6569C307.157 28.1571 305.122 29 303 29C300.878 29 298.843 28.1571 297.343 26.6569C295.843 25.1566 295 23.1217 295 21ZM303 21.5C303.597 21.5 304.169 21.2629 304.591 20.841C305.013 20.419 305.25 19.8467 305.25 19.25C305.25 18.6533 305.013 18.081 304.591 17.659C304.169 17.2371 303.597 17 303 17C302.403 17 301.831 17.2371 301.409 17.659C300.987 18.081 300.75 18.6533 300.75 19.25C300.75 19.8467 300.987 20.419 301.409 20.841C301.831 21.2629 302.403 21.5 303 21.5Z"
    }
  };
  function TabIcon({
    name,
    active
  }) {
    const set = ICONS[name];
    if (!set) return null;
    return /*#__PURE__*/React.createElement("svg", {
      width: "26",
      height: "26",
      viewBox: set.viewBox,
      "aria-hidden": "true",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: active ? set.solid : set.outline,
      fill: "currentColor"
    }));
  }

  /**
   * Spreekuur TabBar — the bottom navigation. Four tabs by default
   * (Overzicht, Chats, Dossier, Profiel). The active tab shows a filled teal
   * icon, a teal label and a teal top-rule; inactive tabs are dark slate
   * outline icons. Built-in glyphs: house / chat / folder / user. A tab may
   * instead supply a FontAwesome `icon` class.
   */
  function TabBar({
    tabs,
    active,
    onChange,
    style
  }) {
    const items = tabs || [{
      id: "overzicht",
      label: "Overzicht",
      glyph: "house"
    }, {
      id: "chats",
      label: "Chats",
      glyph: "chat"
    }, {
      id: "dossier",
      label: "Dossier",
      glyph: "folder"
    }, {
      id: "profiel",
      label: "Profiel",
      glyph: "user"
    }];
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        display: "flex",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--color-divider)",
        minHeight: 60,
        fontFamily: "var(--font-body)",
        ...style
      }
    }, items.map(t => {
      const on = t.id === active;
      const color = on ? "var(--ion-color-primary)" : "var(--ion-color-dark)";
      return /*#__PURE__*/React.createElement("button", {
        key: t.id,
        onClick: () => onChange && onChange(t.id),
        style: {
          position: "relative",
          flex: 1,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 4,
          padding: "8px 0",
          color
        }
      }, on && /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "62%",
          height: 3,
          borderRadius: "0 0 3px 3px",
          background: "var(--ion-color-primary)"
        }
      }), t.glyph ? /*#__PURE__*/React.createElement(TabIcon, {
        name: t.glyph,
        active: on
      }) : /*#__PURE__*/React.createElement("i", {
        className: t.icon,
        "aria-hidden": "true",
        style: {
          fontSize: 20
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 13,
          lineHeight: "16px",
          fontFamily: "var(--font-body)",
          fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)"
        }
      }, t.label));
    }));
  }

  // ===== components/navigation/Accordion.jsx =====

  /**
   * Spreekuur Accordion — ds-native-accordion. A header row (title + optional
   * subtitle/date + optional note) with a rotating teal chevron, expanding to
   * reveal its children. Stack several inside <List> for a grouped card.
   */
  function Accordion({
    title,
    subtitle,
    note,
    children,
    defaultOpen = false,
    open,
    onToggle,
    style
  }) {
    const [internal, setInternal] = useState(defaultOpen);
    const isControlled = open !== undefined;
    const isOpen = isControlled ? open : internal;
    const toggle = () => {
      if (!isControlled) setInternal(!isOpen);
      onToggle && onToggle(!isOpen);
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        background: "var(--surface-card)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: toggle,
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "14px 16px",
        minHeight: 48,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)"
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        fontSize: 14,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, subtitle), note && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        marginTop: 4,
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--ion-color-medium-tint)"
      }
    }, note)), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-down",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 16,
        transition: "transform var(--duration-base) var(--ease-standard)",
        transform: isOpen ? "rotate(180deg)" : "none"
      }
    })), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 16px 12px"
      }
    }, children));
  }

  // ===== components/navigation/SegmentBar.jsx =====

  /**
   * Spreekuur SegmentBar — the two-or-more-way switcher that sits directly under
   * the header (e.g. Komend / Historie on Afspraken). Full-width equal segments,
   * the active one in petrol-teal semibold with a teal underline; inactive in
   * medium grey. A hairline divider runs along the bottom.
   */
  function SegmentBar({
    options = [],
    value,
    onChange,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, options.map(o => {
      const id = o.id ?? o;
      const label = o.label ?? o;
      const on = id === value;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        onClick: () => onChange && onChange(id),
        style: {
          flex: 1,
          border: "none",
          background: "transparent",
          cursor: "pointer",
          padding: "14px 8px",
          fontSize: 16,
          fontFamily: "var(--font-body)",
          fontWeight: on ? "var(--weight-semibold)" : "var(--weight-regular)",
          color: on ? "var(--ion-color-primary)" : "var(--ion-color-medium)",
          borderBottom: on ? "3px solid var(--ion-color-primary)" : "3px solid transparent",
          marginBottom: -1,
          transition: "color var(--duration-fast) var(--ease-standard)"
        }
      }, label);
    }));
  }

  // ===== components/navigation/ChatListItem.jsx =====

  /**
   * Spreekuur ChatListItem — a conversation row: a round avatar (single person
   * or group), the conversation name with a right-aligned date, a bold sender
   * prefix + message preview, and an organisation line. Preview lines clamp.
   * Unread rows can show a teal dot.
   */
  function ChatListItem({
    name,
    date,
    sender,
    preview,
    organisation,
    group = false,
    avatar,
    unread = false,
    onClick,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 16,
        padding: "14px 16px",
        background: "var(--surface-card)",
        cursor: onClick ? "pointer" : "default",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        width: 56,
        height: 56,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: "var(--ion-color-light-shade)",
        color: "var(--ion-color-medium)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }
    }, typeof avatar === "string" ? /*#__PURE__*/React.createElement("img", {
      src: avatar,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : /*#__PURE__*/React.createElement("i", {
      className: group ? "fa-solid fa-user-group" : "fa-solid fa-user",
      "aria-hidden": "true",
      style: {
        fontSize: 22
      }
    })), unread && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 13,
        height: 13,
        borderRadius: "50%",
        background: "var(--ion-color-primary)",
        border: "2px solid var(--surface-card)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontWeight: "var(--weight-bold)",
        fontSize: 18,
        lineHeight: "24px",
        color: "var(--text-default)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, name), date && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: "none",
        fontSize: 15,
        color: "var(--text-secondary)"
      }
    }, date)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "1px 0 0",
        fontSize: 15,
        lineHeight: "21px",
        color: "var(--text-secondary)",
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"
      }
    }, sender && /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: "var(--weight-bold)",
        color: "var(--text-default)"
      }
    }, sender, ": "), preview), organisation && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 1,
        fontSize: 15,
        lineHeight: "21px",
        color: "var(--text-secondary)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, organisation)));
  }

  // ===== components/navigation/ListSection.jsx =====

  /**
   * Spreekuur ListSection — an optional bold section label above a grouped list
   * (e.g. "Algemeen", "Dossier ophalen" on the settings screen). Renders the
   * label, then its children (usually a <List>), with vertical rhythm between
   * sections.
   */
  function ListSection({
    label,
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        fontFamily: "var(--font-body)",
        ...style
      }
    }, label && /*#__PURE__*/React.createElement("h4", {
      style: {
        margin: "0 0 8px 2px",
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-black)",
        fontSize: 20,
        lineHeight: "26px",
        color: "var(--text-default)"
      }
    }, label), children);
  }

  // ===== components/feedback/Badge.jsx =====

  /**
   * Spreekuur Badge — the status pill (used for appointment statuses like
   * "Geaccepteerd", "Ingepland", "Wacht op beoordeling"). Pill shape, soft
   * tinted background with a matching deeper text color.
   */
  function Badge({
    children,
    type = "info",
    icon,
    style
  }) {
    const palette = {
      info: {
        bg: "var(--ion-color-light-shade)",
        fg: "var(--ion-color-dark)"
      },
      neutral: {
        bg: "var(--ion-color-light-shade)",
        fg: "var(--ion-color-dark)"
      },
      success: {
        bg: "var(--ion-color-success-lighter)",
        fg: "var(--ion-color-success-shade)"
      },
      warning: {
        bg: "var(--ion-color-warning-lighter)",
        fg: "var(--ion-color-warning-shade)"
      },
      danger: {
        bg: "var(--ion-color-danger-lighter)",
        fg: "var(--ion-color-danger-shade)"
      },
      primary: {
        bg: "var(--ion-color-secondary)",
        fg: "var(--ion-color-primary)"
      }
    }[type] || {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)"
    };
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "2px 10px",
        borderRadius: "var(--radius-pill)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: "var(--weight-medium)",
        background: palette.bg,
        color: palette.fg,
        ...style
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), children);
  }

  // ===== components/feedback/InlineNotification.jsx =====

  /**
   * Spreekuur InlineNotification — ds-native-inline-notification. A soft tinted
   * card with a filled circular status icon, a title and optional subtitle, and
   * an optional close. Rounded (16px) like the Ionic ios inset list it's built
   * from.
   */
  function InlineNotification({
    type = "info",
    title,
    subtitle,
    onClose,
    icon,
    style
  }) {
    const cfg = {
      info: {
        bg: "var(--ion-color-secondary)",
        dot: "var(--ion-color-primary)",
        glyph: "fa-solid fa-info"
      },
      success: {
        bg: "var(--ion-color-success-lighter)",
        dot: "var(--ion-color-success)",
        glyph: "fa-solid fa-check"
      },
      warning: {
        bg: "var(--ion-color-warning-lighter)",
        dot: "var(--ion-color-warning)",
        glyph: "fa-solid fa-exclamation"
      },
      danger: {
        bg: "var(--ion-color-danger-lighter)",
        dot: "var(--ion-color-danger)",
        glyph: "fa-solid fa-exclamation"
      }
    }[type] || {};
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: 14,
        borderRadius: "var(--radius-lg)",
        background: cfg.bg,
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flex: "none",
        borderRadius: "50%",
        background: cfg.dot,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 13
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon || cfg.glyph,
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, title && /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "22px",
        color: "var(--text-default)"
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--text-secondary)"
      }
    }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Sluiten",
      style: {
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        cursor: "pointer",
        fontSize: 16,
        padding: 2,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true"
    })));
  }

  // ===== components/feedback/ReadOnly.jsx =====

  const RO_BADGE = {
    info: {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)",
      icon: "fa-solid fa-circle-info"
    },
    neutral: {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)",
      icon: null
    },
    success: {
      bg: "var(--ion-color-success-lighter)",
      fg: "var(--ion-color-success-shade)",
      icon: "fa-solid fa-check"
    },
    warning: {
      bg: "var(--ion-color-warning-lighter)",
      fg: "var(--ion-color-warning-shade)",
      icon: "fa-solid fa-clock"
    },
    danger: {
      bg: "var(--ion-color-danger-lighter)",
      fg: "var(--ion-color-danger-shade)",
      icon: "fa-solid fa-xmark"
    }
  };

  /**
   * Spreekuur ReadOnly — ds-native read-only item. Same content layout as a
   * ListItem (title / subtitle / badge / note) but non-interactive (no chevron,
   * no hover). Adds an optional leading marker: a numbered circle or a bullet.
   */
  function ReadOnly({
    title,
    subtitle,
    subtitleIcon,
    subtitleAsPill = false,
    badge,
    badgeType = "info",
    badgeIcon,
    note,
    icon,
    marker,
    thumbnail,
    disabled = false,
    style
  }) {
    const pal = RO_BADGE[badgeType] || RO_BADGE.info;
    const bIcon = badgeIcon === null ? null : badgeIcon || pal.icon;
    let leading = null;
    if (marker === "bullet") {
      leading = /*#__PURE__*/React.createElement("span", {
        style: {
          width: 24,
          display: "flex",
          justifyContent: "center",
          flex: "none"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "var(--ion-color-dark)"
        }
      }));
    } else if (marker != null) {
      leading = /*#__PURE__*/React.createElement("span", {
        style: {
          position: "relative",
          width: 24,
          height: 24,
          flex: "none",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-certificate",
        "aria-hidden": "true",
        style: {
          color: "var(--ion-color-dark)",
          fontSize: 24
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: 11,
          fontWeight: "var(--weight-bold)",
          lineHeight: 1
        }
      }, marker));
    } else if (icon) {
      leading = /*#__PURE__*/React.createElement("i", {
        className: icon,
        "aria-hidden": "true",
        style: {
          color: "var(--ion-color-primary)",
          fontSize: 16,
          width: 16,
          height: 16,
          lineHeight: "16px",
          textAlign: "center",
          flex: "none"
        }
      });
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 16px",
        minHeight: 44,
        background: "var(--surface-card)",
        fontFamily: "var(--font-body)",
        opacity: disabled ? 0.5 : 1,
        ...style
      }
    }, leading, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-default)"
      }
    }, title), subtitle != null && (subtitleAsPill ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 3,
        padding: "0 10px",
        height: 20,
        borderRadius: "var(--radius-pill)",
        background: "var(--ion-color-light-shade)",
        color: "var(--ion-color-dark)",
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: "var(--weight-medium)"
      }
    }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
      className: subtitleIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), subtitle) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: 14,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
      className: subtitleIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 13,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", null, subtitle))), badge && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        marginTop: 3,
        padding: "0 10px",
        height: 20,
        borderRadius: "var(--radius-pill)",
        fontSize: 14,
        lineHeight: "20px",
        fontWeight: "var(--weight-medium)",
        color: pal.fg,
        background: pal.bg
      }
    }, bIcon && /*#__PURE__*/React.createElement("i", {
      className: bIcon,
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), badge), note && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4,
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--ion-color-medium-tint)"
      }
    }, note)), thumbnail && /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "var(--radius-sm)",
        background: "var(--ion-color-light)",
        flex: "none",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, typeof thumbnail === "string" ? /*#__PURE__*/React.createElement("img", {
      src: thumbnail,
      alt: "",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "cover"
      }
    }) : null));
  }

  // ===== components/feedback/Toast.jsx =====

  /**
   * Spreekuur Toast — toast-service notification. A solid-colored rounded bar
   * with a white status icon, white text (title + optional body) and a close X.
   */
  function Toast({
    type = "success",
    title,
    body,
    onClose,
    icon,
    style
  }) {
    const cfg = {
      success: {
        bg: "var(--ion-color-success)",
        glyph: "fa-solid fa-check"
      },
      error: {
        bg: "var(--ion-color-danger)",
        glyph: "fa-solid fa-exclamation"
      },
      danger: {
        bg: "var(--ion-color-danger)",
        glyph: "fa-solid fa-exclamation"
      },
      warning: {
        bg: "var(--ion-color-warning)",
        glyph: "fa-solid fa-exclamation"
      },
      info: {
        bg: "var(--ion-color-primary)",
        glyph: "fa-solid fa-info"
      }
    }[type] || {};
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: body ? "flex-start" : "center",
        gap: 12,
        padding: "12px 14px",
        borderRadius: "var(--radius-md)",
        background: cfg.bg,
        color: "#fff",
        fontFamily: "var(--font-body)",
        maxWidth: 360,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: "none",
        borderRadius: "50%",
        background: "#fff",
        color: cfg.bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon || cfg.glyph,
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, title && /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 15,
        lineHeight: "20px"
      }
    }, title), body && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: "20px",
        marginTop: title ? 2 : 0
      }
    }, body)), onClose && /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Sluiten",
      style: {
        border: "none",
        background: "transparent",
        color: "#fff",
        cursor: "pointer",
        fontSize: 16,
        padding: 2,
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true"
    })));
  }

  // ===== components/feedback/SkeletonListItem.jsx =====

  /**
   * Spreekuur SkeletonListItem — the loading placeholder for a list row: a round
   * avatar circle and 2–3 grey bars of decreasing width, with a soft shimmer.
   * Render several inside <List> while content loads.
   */
  function SkeletonListItem({
    avatar = true,
    lines = 3,
    style
  }) {
    const widths = ["86%", "52%", "32%"];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "12px 16px",
        minHeight: 64,
        background: "var(--surface-card)",
        ...style
      }
    }, avatar && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: "50%",
        flex: "none",
        background: "var(--shimmer, #ebebeb)"
      },
      className: "su-shimmer"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, Array.from({
      length: lines
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      className: "su-shimmer",
      style: {
        height: 12,
        borderRadius: 6,
        width: widths[i] || "40%",
        background: "var(--shimmer, #ebebeb)"
      }
    }))), /*#__PURE__*/React.createElement("style", null, `
        .su-shimmer { position: relative; overflow: hidden; }
        .su-shimmer::after { content: ""; position: absolute; inset: 0; transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
          animation: su-shimmer 1.4s infinite; }
        @keyframes su-shimmer { 100% { transform: translateX(100%); } }
        @media (prefers-reduced-motion: reduce) { .su-shimmer::after { animation: none; } }
      `));
  }

  // ===== components/feedback/EmptyState.jsx =====

  /**
   * Spreekuur EmptyState — centered illustration + Merriweather title +
   * supporting copy + optional action. Pass the brand illustration as
   * `illustration` (a node from the illustration bundle) or via children.
   * Set `arrow` to draw a hand-style curved arrow pointing at the action
   * (the "Geen afspraken gevonden → Afspraak maken" pattern).
   */
  function EmptyState({
    illustration,
    children,
    title,
    subtitle,
    action,
    arrow = false,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 10,
        padding: "32px 24px",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, (illustration || children) && /*#__PURE__*/React.createElement("div", {
      style: {
        marginBottom: 8
      }
    }, illustration || children), title && /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-black)",
        fontSize: 28,
        lineHeight: "36px",
        color: "var(--text-default)",
        margin: 0
      }
    }, title), subtitle && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: "24px",
        color: "var(--text-secondary)",
        maxWidth: 340
      }
    }, subtitle), action && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        marginTop: 18,
        display: "inline-flex"
      }
    }, action, arrow && /*#__PURE__*/React.createElement("svg", {
      width: "70",
      height: "74",
      viewBox: "0 0 70 74",
      "aria-hidden": "true",
      style: {
        position: "absolute",
        left: "calc(100% + 6px)",
        top: -34,
        color: "var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M14 6 C 55 2, 64 30, 40 58",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "5",
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M40 58 L 30 47 M40 58 L 52 52",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))));
  }

  // ===== components/complex/Wizard.jsx =====

  /**
   * Spreekuur Wizard — ds-native wizard shell. A full-bleed modal with a header
   * (per-step title + close X), a scrollable content area, and a footer with the
   * "X van Y" progress bar plus the Vorige / Volgende (Afronden) button pair.
   * Manages step state internally from a `steps` array.
   */
  function Wizard({
    steps = [],
    onClose,
    onFinish,
    startStep = 1,
    nextLabel = "Volgende",
    prevLabel = "Vorige",
    finishLabel = "Afronden",
    separator = "van",
    style
  }) {
    const [step, setStep] = useState(startStep);
    const total = steps.length || 1;
    const current = steps[step - 1] || {};
    const isLast = step >= total;
    const next = () => isLast ? onFinish && onFinish() : setStep(step + 1);
    const prev = () => step > 1 && setStep(step - 1);
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-app)",
        fontFamily: "var(--font-body)",
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        height: 56,
        padding: "0 8px",
        borderBottom: "1px solid var(--color-divider)",
        background: "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)"
      }
    }, current.title || `Stap ${step}`), /*#__PURE__*/React.createElement("button", {
      onClick: onClose,
      "aria-label": "Sluiten",
      style: {
        width: 40,
        height: 40,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 20,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        overflowY: "auto",
        padding: 16
      }
    }, current.content), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderTop: "1px solid var(--color-divider)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(ProgressBar, {
      value: step / total,
      currentStep: step,
      totalSteps: total,
      separator: separator,
      style: {
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      expand: true,
      iconLeft: "fa-solid fa-arrow-left",
      onClick: prev,
      disabled: step === 1
    }, prevLabel), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      expand: true,
      iconRight: isLast ? undefined : "fa-solid fa-arrow-right",
      onClick: next
    }, isLast ? finishLabel : nextLabel))));
  }
  window.SpreekuurDesignSystem_5ed928 = Object.assign(window.SpreekuurDesignSystem_5ed928 || {}, {
    Button,
    Modal,
    Input,
    Textarea,
    Checkbox,
    Radio,
    Select,
    Header,
    ListItem,
    List,
    ProgressBar,
    TabBar,
    Accordion,
    SegmentBar,
    ChatListItem,
    ListSection,
    Badge,
    InlineNotification,
    ReadOnly,
    Toast,
    SkeletonListItem,
    EmptyState,
    Wizard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/ds-runtime.js", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
/**
 * Spreekuur Badge — the status pill (used for appointment statuses like
 * "Geaccepteerd", "Ingepland", "Wacht op beoordeling"). Pill shape, soft
 * tinted background with a matching deeper text color.
 */
function Badge({
  children,
  type = "info",
  icon,
  style
}) {
  const palette = {
    info: {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)"
    },
    neutral: {
      bg: "var(--ion-color-light-shade)",
      fg: "var(--ion-color-dark)"
    },
    success: {
      bg: "var(--ion-color-success-lighter)",
      fg: "var(--ion-color-success-shade)"
    },
    warning: {
      bg: "var(--ion-color-warning-lighter)",
      fg: "var(--ion-color-warning-shade)"
    },
    danger: {
      bg: "var(--ion-color-danger-lighter)",
      fg: "var(--ion-color-danger-shade)"
    },
    primary: {
      bg: "var(--ion-color-secondary)",
      fg: "var(--ion-color-primary)"
    }
  }[type] || {
    bg: "var(--ion-color-light-shade)",
    fg: "var(--ion-color-dark)"
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "2px 10px",
      borderRadius: "var(--radius-pill)",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--weight-medium)",
      background: palette.bg,
      color: palette.fg,
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      fontSize: 12
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * Spreekuur EmptyState — centered illustration + Merriweather title +
 * supporting copy + optional action. Pass the brand illustration as
 * `illustration` (a node from the illustration bundle) or via children.
 * Set `arrow` to draw a hand-style curved arrow pointing at the action
 * (the "Geen afspraken gevonden → Afspraak maken" pattern).
 */
function EmptyState({
  illustration,
  children,
  title,
  subtitle,
  action,
  arrow = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: 10,
      padding: "32px 24px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, (illustration || children) && /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8
    }
  }, illustration || children), title && /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-black)",
      fontSize: 28,
      lineHeight: "36px",
      color: "var(--text-default)",
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-secondary)",
      maxWidth: 340
    }
  }, subtitle), action && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      marginTop: 18,
      display: "inline-flex"
    }
  }, action, arrow && /*#__PURE__*/React.createElement("svg", {
    width: "70",
    height: "74",
    viewBox: "0 0 70 74",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: "calc(100% + 6px)",
      top: -34,
      color: "var(--color-divider)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M14 6 C 55 2, 64 30, 40 58",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M40 58 L 30 47 M40 58 L 52 52",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/InlineNotification.jsx
try { (() => {
/**
 * Spreekuur InlineNotification — ds-native-inline-notification. A soft tinted
 * card with a filled circular status icon, a title and optional subtitle, and
 * an optional close. Rounded (16px) like the Ionic ios inset list it's built
 * from.
 */
function InlineNotification({
  type = "info",
  title,
  subtitle,
  onClose,
  icon,
  style
}) {
  const cfg = {
    info: {
      bg: "var(--ion-color-secondary)",
      dot: "var(--ion-color-primary)",
      glyph: "fa-solid fa-info"
    },
    success: {
      bg: "var(--ion-color-success-lighter)",
      dot: "var(--ion-color-success)",
      glyph: "fa-solid fa-check"
    },
    warning: {
      bg: "var(--ion-color-warning-lighter)",
      dot: "var(--ion-color-warning)",
      glyph: "fa-solid fa-exclamation"
    },
    danger: {
      bg: "var(--ion-color-danger-lighter)",
      dot: "var(--ion-color-danger)",
      glyph: "fa-solid fa-exclamation"
    }
  }[type] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: 14,
      borderRadius: "var(--radius-lg)",
      background: cfg.bg,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      flex: "none",
      borderRadius: "50%",
      background: cfg.dot,
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon || cfg.glyph,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 16,
      lineHeight: "22px",
      color: "var(--text-default)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      color: "var(--text-secondary)"
    }
  }, subtitle)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Sluiten",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ion-color-primary)",
      cursor: "pointer",
      fontSize: 16,
      padding: 2,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { InlineNotification });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/InlineNotification.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ReadOnly.jsx
try { (() => {
const RO_BADGE = {
  info: {
    bg: "var(--ion-color-light-shade)",
    fg: "var(--ion-color-dark)",
    icon: "fa-solid fa-circle-info"
  },
  neutral: {
    bg: "var(--ion-color-light-shade)",
    fg: "var(--ion-color-dark)",
    icon: null
  },
  success: {
    bg: "var(--ion-color-success-lighter)",
    fg: "var(--ion-color-success-shade)",
    icon: "fa-solid fa-check"
  },
  warning: {
    bg: "var(--ion-color-warning-lighter)",
    fg: "var(--ion-color-warning-shade)",
    icon: "fa-solid fa-clock"
  },
  danger: {
    bg: "var(--ion-color-danger-lighter)",
    fg: "var(--ion-color-danger-shade)",
    icon: "fa-solid fa-xmark"
  }
};

/**
 * Spreekuur ReadOnly — ds-native read-only item. Same content layout as a
 * ListItem (title / subtitle / badge / note) but non-interactive (no chevron,
 * no hover). Adds an optional leading marker: a numbered circle or a bullet.
 */
function ReadOnly({
  title,
  subtitle,
  subtitleIcon,
  subtitleAsPill = false,
  badge,
  badgeType = "info",
  badgeIcon,
  note,
  icon,
  marker,
  thumbnail,
  disabled = false,
  style
}) {
  const pal = RO_BADGE[badgeType] || RO_BADGE.info;
  const bIcon = badgeIcon === null ? null : badgeIcon || pal.icon;
  let leading = null;
  if (marker === "bullet") {
    leading = /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        display: "flex",
        justifyContent: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "var(--ion-color-dark)"
      }
    }));
  } else if (marker != null) {
    leading = /*#__PURE__*/React.createElement("span", {
      style: {
        position: "relative",
        width: 24,
        height: 24,
        flex: "none",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-certificate",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-dark)",
        fontSize: 24
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        fontSize: 11,
        fontWeight: "var(--weight-bold)",
        lineHeight: 1
      }
    }, marker));
  } else if (icon) {
    leading = /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 16,
        width: 16,
        height: 16,
        lineHeight: "16px",
        textAlign: "center",
        flex: "none"
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "10px 16px",
      minHeight: 44,
      background: "var(--surface-card)",
      fontFamily: "var(--font-body)",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, leading, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)"
    }
  }, title), subtitle != null && (subtitleAsPill ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 3,
      padding: "0 10px",
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "var(--ion-color-light-shade)",
      color: "var(--ion-color-dark)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--weight-medium)"
    }
  }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
    className: subtitleIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 12
    }
  }), subtitle) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      lineHeight: "18px",
      color: "var(--text-secondary)"
    }
  }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
    className: subtitleIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 13,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, subtitle))), badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 3,
      padding: "0 10px",
      height: 20,
      borderRadius: "var(--radius-pill)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--weight-medium)",
      color: pal.fg,
      background: pal.bg
    }
  }, bIcon && /*#__PURE__*/React.createElement("i", {
    className: bIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 12
    }
  }), badge), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--ion-color-medium-tint)"
    }
  }, note)), thumbnail && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-sm)",
      background: "var(--ion-color-light)",
      flex: "none",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, typeof thumbnail === "string" ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null));
}
Object.assign(__ds_scope, { ReadOnly });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ReadOnly.jsx", error: String((e && e.message) || e) }); }

// components/feedback/SkeletonListItem.jsx
try { (() => {
/**
 * Spreekuur SkeletonListItem — the loading placeholder for a list row: a round
 * avatar circle and 2–3 grey bars of decreasing width, with a soft shimmer.
 * Render several inside <List> while content loads.
 */
function SkeletonListItem({
  avatar = true,
  lines = 3,
  style
}) {
  const widths = ["86%", "52%", "32%"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "12px 16px",
      minHeight: 64,
      background: "var(--surface-card)",
      ...style
    }
  }, avatar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "50%",
      flex: "none",
      background: "var(--shimmer, #ebebeb)"
    },
    className: "su-shimmer"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, Array.from({
    length: lines
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "su-shimmer",
    style: {
      height: 12,
      borderRadius: 6,
      width: widths[i] || "40%",
      background: "var(--shimmer, #ebebeb)"
    }
  }))), /*#__PURE__*/React.createElement("style", null, `
        .su-shimmer { position: relative; overflow: hidden; }
        .su-shimmer::after { content: ""; position: absolute; inset: 0; transform: translateX(-100%);
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.65), transparent);
          animation: su-shimmer 1.4s infinite; }
        @keyframes su-shimmer { 100% { transform: translateX(100%); } }
        @media (prefers-reduced-motion: reduce) { .su-shimmer::after { animation: none; } }
      `));
}
Object.assign(__ds_scope, { SkeletonListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/SkeletonListItem.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/**
 * Spreekuur Toast — toast-service notification. A solid-colored rounded bar
 * with a white status icon, white text (title + optional body) and a close X.
 */
function Toast({
  type = "success",
  title,
  body,
  onClose,
  icon,
  style
}) {
  const cfg = {
    success: {
      bg: "var(--ion-color-success)",
      glyph: "fa-solid fa-check"
    },
    error: {
      bg: "var(--ion-color-danger)",
      glyph: "fa-solid fa-exclamation"
    },
    danger: {
      bg: "var(--ion-color-danger)",
      glyph: "fa-solid fa-exclamation"
    },
    warning: {
      bg: "var(--ion-color-warning)",
      glyph: "fa-solid fa-exclamation"
    },
    info: {
      bg: "var(--ion-color-primary)",
      glyph: "fa-solid fa-info"
    }
  }[type] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: body ? "flex-start" : "center",
      gap: 12,
      padding: "12px 14px",
      borderRadius: "var(--radius-md)",
      background: cfg.bg,
      color: "#fff",
      fontFamily: "var(--font-body)",
      maxWidth: 360,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: "none",
      borderRadius: "50%",
      background: "#fff",
      color: cfg.bg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon || cfg.glyph,
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 15,
      lineHeight: "20px"
    }
  }, title), body && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      lineHeight: "20px",
      marginTop: title ? 2 : 0
    }
  }, body)), onClose && /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Sluiten",
    style: {
      border: "none",
      background: "transparent",
      color: "#fff",
      cursor: "pointer",
      fontSize: 16,
      padding: 2,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spreekuur Button — mirrors the ds-native button directives
 * (nds-button-primary/secondary/tertiary + delete variants), which are
 * thin wrappers over Ionic's <ion-button>.
 *
 *  variant: primary   → solid petrol teal, white text (the main CTA)
 *           secondary → outline, dark text/border (the "Vorige" companion)
 *           tertiary  → text-only, primary color (low-emphasis)
 *           delete    → solid danger
 *           delete-tertiary → text-only danger
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  expand = false,
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
  type = "button",
  style,
  ...rest
}) {
  const heights = {
    sm: 40,
    md: 48,
    lg: 56
  };
  const padX = {
    sm: 16,
    md: 20,
    lg: 24
  };
  const iconOnly = !children && (iconLeft || iconRight);
  const base = {
    display: expand ? "flex" : "inline-flex",
    width: expand ? "100%" : iconOnly ? heights[size] : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    height: heights[size],
    padding: iconOnly ? 0 : `0 ${padX[size]}px`,
    borderRadius: "var(--radius-control)",
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    fontSize: size === "sm" ? 14 : 16,
    lineHeight: 1,
    cursor: disabled || loading ? "not-allowed" : "pointer",
    border: "1.5px solid transparent",
    transition: "background var(--duration-fast) var(--ease-standard), opacity var(--duration-fast) var(--ease-standard)",
    WebkitTapHighlightColor: "transparent",
    userSelect: "none",
    whiteSpace: "nowrap"
  };
  const variants = {
    primary: {
      background: "var(--ion-color-primary)",
      color: "#fff",
      borderColor: "var(--ion-color-primary)"
    },
    secondary: {
      background: "transparent",
      color: "var(--ion-color-dark)",
      borderColor: "var(--ion-color-dark)"
    },
    tertiary: {
      background: "transparent",
      color: "var(--ion-color-primary)",
      borderColor: "transparent"
    },
    delete: {
      background: "var(--ion-color-danger)",
      color: "#fff",
      borderColor: "var(--ion-color-danger)"
    },
    "delete-tertiary": {
      background: "transparent",
      color: "var(--ion-color-danger)",
      borderColor: "transparent"
    }
  };
  const v = variants[variant] || variants.primary;
  const merged = {
    ...base,
    ...v,
    ...(disabled || loading ? {
      opacity: 0.45
    } : null),
    ...style
  };
  const hoverIn = ev => {
    if (disabled || loading) return;
    if (variant === "primary") ev.currentTarget.style.background = "var(--ion-color-primary-shade)";else if (variant === "delete") ev.currentTarget.style.background = "var(--ion-color-danger-shade)";else if (variant === "secondary") ev.currentTarget.style.background = "var(--ion-color-light)";else ev.currentTarget.style.background = "var(--ion-color-secondary)";
  };
  const hoverOut = ev => {
    if (disabled || loading) return;
    ev.currentTarget.style.background = v.background;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled || loading,
    onClick: onClick,
    onMouseEnter: hoverIn,
    onMouseLeave: hoverOut,
    style: merged
  }, rest), loading && /*#__PURE__*/React.createElement(Spinner, null), !loading && iconLeft && /*#__PURE__*/React.createElement("i", {
    className: iconLeft,
    "aria-hidden": "true"
  }), !loading && children, !loading && iconRight && /*#__PURE__*/React.createElement("i", {
    className: iconRight,
    "aria-hidden": "true"
  }));
}
function Spinner() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      border: "2px solid currentColor",
      borderTopColor: "transparent",
      borderRadius: "50%",
      display: "inline-block",
      animation: "su-spin 0.6s linear infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes su-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/**
 * Spreekuur Checkbox — ds-native-checkbox. Two shapes:
 *  - simple: <Checkbox label="…" /> (box + single label)
 *  - list row: pass title/subtitle/subtitleIcon/note/thumbnail to render a
 *    selectable row with the same content styling as ListItem.
 * 5px-radius box, petrol-teal when checked.
 */
function Checkbox({
  checked = false,
  onChange,
  label,
  title,
  subtitle,
  subtitleIcon,
  note,
  thumbnail,
  disabled = false,
  id,
  style
}) {
  const box = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: "none",
      borderRadius: "var(--radius-xs)",
      border: checked ? "none" : "2px solid var(--color-checkbox-border)",
      background: checked ? "var(--ion-color-primary)" : "var(--ion-color-white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "background var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 13l4 4L19 7",
    stroke: "#fff",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })));
  const input = /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  });

  // List-row form
  if (title != null) {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 16px",
        minHeight: 44,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        ...style
      }
    }, box, input, /*#__PURE__*/React.createElement(RowContent, {
      title: title,
      subtitle: subtitle,
      subtitleIcon: subtitleIcon,
      note: note
    }), thumbnail && /*#__PURE__*/React.createElement(Thumb, {
      thumbnail: thumbnail
    }));
  }

  // Simple form
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)",
      ...style
    }
  }, box, input, label && /*#__PURE__*/React.createElement("span", null, label));
}
function RowContent({
  title,
  subtitle,
  subtitleIcon,
  note
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)"
    }
  }, title), subtitle != null && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: 14,
      lineHeight: "18px",
      color: "var(--text-secondary)"
    }
  }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
    className: subtitleIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 13,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, subtitle)), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--ion-color-medium-tint)"
    }
  }, note));
}
function Thumb({
  thumbnail
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-sm)",
      background: "var(--ion-color-light)",
      flex: "none",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, typeof thumbnail === "string" ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null);
}
Object.assign(__ds_scope, { Checkbox, RowContent, Thumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
/**
 * Spreekuur Input — ds-native-input: Ionic md, outline fill, stacked label
 * that notches into the top border (a real border gap, no fill behind it),
 * optional suffix, character counter and error state.
 */
function Input({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  error,
  suffix,
  counter = false,
  maxlength,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? "");
  const id = useId();
  const isControlled = value !== undefined;
  const val = isControlled ? value : internal;
  const len = (val ?? "").length;
  const active = focused || error;
  const bw = active ? 2 : 1;
  const borderColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--color-border)";
  const labelColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: "100%",
      background: "var(--ion-color-white)",
      borderRadius: "var(--radius-sm)",
      padding: "0 14px"
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    type: type,
    value: val,
    placeholder: placeholder,
    disabled: disabled,
    maxLength: maxlength,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: e => {
      if (!isControlled) setInternal(e.target.value);
      onChange && onChange(e);
    },
    style: {
      flex: 1,
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)",
      minWidth: 0
    }
  }, rest)), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 16,
      whiteSpace: "nowrap"
    }
  }, suffix)), /*#__PURE__*/React.createElement("fieldset", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0,
      padding: "0 10px",
      borderRadius: "var(--radius-sm)",
      border: `${bw}px solid ${borderColor}`,
      pointerEvents: "none",
      minInlineSize: 0
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontSize: 12,
      lineHeight: 0,
      maxWidth: "100%",
      whiteSpace: "nowrap",
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "0 4px",
      opacity: 0
    }
  }, label, required ? " *" : ""))), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      position: "absolute",
      top: -8,
      left: 14,
      fontSize: 12,
      lineHeight: "16px",
      color: labelColor,
      pointerEvents: "none",
      whiteSpace: "nowrap"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ion-color-danger)"
    }
  }, " *"))), (error || counter) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: error ? "space-between" : "flex-end",
      gap: 12,
      marginTop: 4,
      padding: "0 4px",
      fontSize: 12,
      lineHeight: "16px"
    }
  }, error && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ion-color-danger)"
    }
  }, error), counter && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, len, maxlength ? ` / ${maxlength}` : "")));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * Spreekuur Radio — ds-native-radio. Two shapes:
 *  - simple: <Radio label="…" /> (ring + single label)
 *  - list row: pass title/subtitle/subtitleIcon/note/thumbnail for a
 *    selectable row matching ListItem content styling.
 * Petrol-teal ring with a filled center dot when selected.
 */
function Radio({
  checked = false,
  onChange,
  label,
  title,
  subtitle,
  subtitleIcon,
  note,
  thumbnail,
  name,
  value,
  disabled = false,
  id,
  style
}) {
  const ring = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: "none",
      borderRadius: "50%",
      border: `2px solid ${checked ? "var(--ion-color-primary)" : "var(--color-checkbox-border)"}`,
      background: "var(--ion-color-white)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "border-color var(--duration-fast) var(--ease-standard)"
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 12,
      height: 12,
      borderRadius: "50%",
      background: "var(--ion-color-primary)"
    }
  }));
  const input = /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(value, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  });
  if (title != null) {
    return /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "10px 16px",
        minHeight: 44,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        fontFamily: "var(--font-body)",
        ...style
      }
    }, ring, input, /*#__PURE__*/React.createElement(__ds_scope.RowContent, {
      title: title,
      subtitle: subtitle,
      subtitleIcon: subtitleIcon,
      note: note
    }), thumbnail && /*#__PURE__*/React.createElement(__ds_scope.Thumb, {
      thumbnail: thumbnail
    }));
  }
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 12,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)",
      ...style
    }
  }, ring, input, label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
/**
 * Spreekuur Textarea — ds-native-textarea. Multi-line, with the same notched
 * outline as Input (real border gap, no fill behind the label), plus optional
 * required asterisk, error, character counter and disabled state.
 */
function Textarea({
  label,
  value,
  defaultValue,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  error,
  counter = false,
  maxlength,
  rows = 4,
  style,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? "");
  const id = useId();
  const isControlled = value !== undefined;
  const val = isControlled ? value : internal;
  const len = (val ?? "").length;
  const active = focused || error;
  const bw = active ? 2 : 1;
  const borderColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--color-border)";
  const labelColor = error ? "var(--ion-color-danger)" : focused ? "var(--ion-color-primary)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    value: val,
    placeholder: placeholder,
    disabled: disabled,
    maxLength: maxlength,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    onChange: e => {
      if (!isControlled) setInternal(e.target.value);
      onChange && onChange(e);
    },
    style: {
      display: "block",
      width: "100%",
      boxSizing: "border-box",
      border: "none",
      outline: "none",
      background: "var(--ion-color-white)",
      borderRadius: "var(--radius-sm)",
      resize: "vertical",
      padding: "12px 14px",
      fontFamily: "var(--font-body)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)"
    }
  }, rest)), /*#__PURE__*/React.createElement("fieldset", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0,
      padding: "0 10px",
      borderRadius: "var(--radius-sm)",
      border: `${bw}px solid ${borderColor}`,
      pointerEvents: "none",
      minInlineSize: 0
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontSize: 12,
      lineHeight: 0,
      maxWidth: "100%",
      whiteSpace: "nowrap",
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "0 4px",
      opacity: 0
    }
  }, label, required ? " *" : ""))), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      position: "absolute",
      top: -8,
      left: 14,
      fontSize: 12,
      lineHeight: "16px",
      color: labelColor,
      pointerEvents: "none",
      whiteSpace: "nowrap"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ion-color-danger)"
    }
  }, " *"))), (error || counter) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: error ? "space-between" : "flex-end",
      gap: 12,
      marginTop: 4,
      padding: "0 4px",
      fontSize: 12,
      lineHeight: "16px"
    }
  }, error && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ion-color-danger)"
    }
  }, error), counter && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-secondary)"
    }
  }, len, maxlength ? ` / ${maxlength}` : "")));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/layout/Modal.jsx
try { (() => {
/**
 * Spreekuur Modal — the ds-native modal sheet. A full-bleed panel with a
 * centered title + close (X) header, a scrollable body, and an optional
 * footer holding 0, 1 or 2 stacked buttons (a solid primary action and/or a
 * tertiary text action). Also used as the options sheet for Select.
 */
function Modal({
  title,
  onClose,
  children,
  primaryLabel,
  onPrimary,
  primaryVariant = "primary",
  primaryDisabled = false,
  secondaryLabel,
  onSecondary,
  position = "fixed",
  style
}) {
  const hasFooter = primaryLabel || secondaryLabel;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position,
      inset: 0,
      zIndex: 1000,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-app)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 56,
      padding: "0 8px",
      borderBottom: "1px solid var(--color-divider)",
      background: "var(--surface-card)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 16,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-default)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Sluiten",
    style: {
      width: 40,
      height: 40,
      flex: "none",
      border: "none",
      background: "transparent",
      color: "var(--ion-color-primary)",
      fontSize: 20,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16
    }
  }, children), hasFooter && /*#__PURE__*/React.createElement("div", {
    style: {
      flex: "none",
      borderTop: "1px solid var(--color-divider)",
      background: "var(--surface-card)",
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, primaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: primaryVariant,
    expand: true,
    disabled: primaryDisabled,
    onClick: onPrimary
  }, primaryLabel), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "tertiary",
    expand: true,
    onClick: onSecondary
  }, secondaryLabel)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Modal.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState,
  useId
} = React;
/**
 * Spreekuur Select — ds-native dropdown. A field that looks like an Input
 * (notched outline + floating label) with a trailing up/down chevron. Tapping
 * it opens a modal sheet of radio options (the ds-native dropdown-modal),
 * including long, wrapping option labels.
 */
function Select({
  label,
  placeholder = "Selecteer een optie",
  options = [],
  value,
  defaultValue,
  onChange,
  required = false,
  disabled = false,
  error,
  modalTitle,
  style
}) {
  const [open, setOpen] = useState(false);
  const [internal, setInternal] = useState(defaultValue ?? null);
  const id = useId();
  const isControlled = value !== undefined;
  const val = isControlled ? value : internal;
  const selected = options.find(o => (o.value ?? o) === val);
  const selectedLabel = selected ? selected.label ?? selected : null;
  const borderColor = error ? "var(--ion-color-danger)" : "var(--color-border)";
  const choose = v => {
    if (!isControlled) setInternal(v);
    onChange && onChange(v);
    setOpen(false);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 56,
      opacity: disabled ? 0.55 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: () => !disabled && setOpen(true),
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: "100%",
      background: "var(--ion-color-white)",
      borderRadius: "var(--radius-sm)",
      padding: "0 14px",
      cursor: disabled ? "not-allowed" : "pointer"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 16,
      color: selectedLabel ? "var(--text-default)" : "var(--text-placeholder)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, selectedLabel || placeholder), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-sort",
    "aria-hidden": "true",
    style: {
      color: "var(--ion-color-medium)",
      fontSize: 15
    }
  })), /*#__PURE__*/React.createElement("fieldset", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: 0,
      padding: "0 10px",
      borderRadius: "var(--radius-sm)",
      border: `1px solid ${borderColor}`,
      pointerEvents: "none",
      minInlineSize: 0
    }
  }, label && /*#__PURE__*/React.createElement("legend", {
    style: {
      padding: 0,
      fontSize: 12,
      lineHeight: 0,
      maxWidth: "100%",
      whiteSpace: "nowrap",
      visibility: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-block",
      padding: "0 4px",
      opacity: 0
    }
  }, label, required ? " *" : ""))), label && /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      position: "absolute",
      top: -8,
      left: 14,
      fontSize: 12,
      lineHeight: "16px",
      color: error ? "var(--ion-color-danger)" : "var(--text-secondary)",
      pointerEvents: "none",
      whiteSpace: "nowrap"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ion-color-danger)"
    }
  }, " *"))), open && /*#__PURE__*/React.createElement(__ds_scope.Modal, {
    title: modalTitle || label || "Kies een optie",
    onClose: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--surface-card)"
    }
  }, options.map((o, i) => {
    const ov = o.value ?? o;
    const ol = o.label ?? o;
    const on = ov === val;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      onClick: () => choose(ov),
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 12,
        padding: "14px 16px",
        cursor: "pointer",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.08)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: "none",
        marginTop: 0,
        borderRadius: "50%",
        border: `2px solid ${on ? "var(--ion-color-primary)" : "var(--color-checkbox-border)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--ion-color-primary)"
      }
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        lineHeight: "22px",
        color: "var(--text-default)"
      }
    }, ol));
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Spreekuur Accordion — ds-native-accordion. A header row (title + optional
 * subtitle/date + optional note) with a rotating teal chevron, expanding to
 * reveal its children. Stack several inside <List> for a grouped card.
 */
function Accordion({
  title,
  subtitle,
  note,
  children,
  defaultOpen = false,
  open,
  onToggle,
  style
}) {
  const [internal, setInternal] = useState(defaultOpen);
  const isControlled = open !== undefined;
  const isOpen = isControlled ? open : internal;
  const toggle = () => {
    if (!isControlled) setInternal(!isOpen);
    onToggle && onToggle(!isOpen);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      background: "var(--surface-card)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: toggle,
    "aria-expanded": isOpen,
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      minHeight: 48,
      border: "none",
      background: "transparent",
      cursor: "pointer",
      textAlign: "left",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontWeight: "var(--weight-semibold)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)"
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      fontSize: 14,
      lineHeight: "18px",
      color: "var(--text-secondary)"
    }
  }, subtitle), note && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "block",
      marginTop: 4,
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--ion-color-medium-tint)"
    }
  }, note)), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-down",
    "aria-hidden": "true",
    style: {
      color: "var(--ion-color-primary)",
      fontSize: 16,
      transition: "transform var(--duration-base) var(--ease-standard)",
      transform: isOpen ? "rotate(180deg)" : "none"
    }
  })), isOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 16px 12px"
    }
  }, children));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ChatListItem.jsx
try { (() => {
/**
 * Spreekuur ChatListItem — a conversation row: a round avatar (single person
 * or group), the conversation name with a right-aligned date, a bold sender
 * prefix + message preview, and an organisation line. Preview lines clamp.
 * Unread rows can show a teal dot.
 */
function ChatListItem({
  name,
  date,
  sender,
  preview,
  organisation,
  group = false,
  avatar,
  unread = false,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 16,
      padding: "14px 16px",
      background: "var(--surface-card)",
      cursor: onClick ? "pointer" : "default",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 56,
      height: 56,
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: "50%",
      background: "var(--ion-color-light-shade)",
      color: "var(--ion-color-medium)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, typeof avatar === "string" ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("i", {
    className: group ? "fa-solid fa-user-group" : "fa-solid fa-user",
    "aria-hidden": "true",
    style: {
      fontSize: 22
    }
  })), unread && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 0,
      right: 0,
      width: 13,
      height: 13,
      borderRadius: "50%",
      background: "var(--ion-color-primary)",
      border: "2px solid var(--surface-card)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      fontWeight: "var(--weight-bold)",
      fontSize: 18,
      lineHeight: "24px",
      color: "var(--text-default)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, name), date && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: "none",
      fontSize: 15,
      color: "var(--text-secondary)"
    }
  }, date)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "1px 0 0",
      fontSize: 15,
      lineHeight: "21px",
      color: "var(--text-secondary)",
      display: "-webkit-box",
      WebkitLineClamp: 1,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }, sender && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: "var(--weight-bold)",
      color: "var(--text-default)"
    }
  }, sender, ": "), preview), organisation && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 1,
      fontSize: 15,
      lineHeight: "21px",
      color: "var(--text-secondary)",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, organisation)));
}
Object.assign(__ds_scope, { ChatListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ChatListItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/**
 * Spreekuur Header — the top toolbar. Two common shapes:
 *  - app header: optional back chevron + centered title + optional action
 *  - modal header: centered title + trailing close (X)
 * White background with a hairline bottom border.
 */
function Header({
  title,
  brand,
  leading,
  onBack,
  onClose,
  action,
  actionIcon,
  onAction,
  onLeading,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      height: 56,
      padding: "0 8px",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--color-divider)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      display: "flex",
      justifyContent: "flex-start"
    }
  }, onBack && /*#__PURE__*/React.createElement(IconBtn, {
    onClick: onBack,
    aria: "Terug"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-chevron-left"
  })), !onBack && leading && /*#__PURE__*/React.createElement(IconBtn, {
    onClick: onLeading,
    aria: "Menu"
  }, leading)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontSize: 16,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-default)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, brand || title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, onClose && /*#__PURE__*/React.createElement(IconBtn, {
    onClick: onClose,
    aria: "Sluiten"
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    style: {
      fontSize: 20
    }
  })), !onClose && (action || actionIcon) && /*#__PURE__*/React.createElement(IconBtn, {
    onClick: onAction,
    aria: "Actie"
  }, actionIcon ? /*#__PURE__*/React.createElement("i", {
    className: actionIcon
  }) : action)));
}
function IconBtn({
  children,
  onClick,
  aria
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    "aria-label": aria,
    style: {
      position: "relative",
      width: 40,
      height: 40,
      border: "none",
      background: "transparent",
      color: "var(--ion-color-primary)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-sm)",
      fontSize: 18
    }
  }, children);
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListItem.jsx
try { (() => {
const BADGE_PALETTE = {
  info: {
    bg: "var(--ion-color-light-shade)",
    fg: "var(--ion-color-dark)"
  },
  neutral: {
    bg: "var(--ion-color-light-shade)",
    fg: "var(--ion-color-dark)"
  },
  success: {
    bg: "var(--ion-color-success-lighter)",
    fg: "var(--ion-color-success-shade)"
  },
  warning: {
    bg: "var(--ion-color-warning-lighter)",
    fg: "var(--ion-color-warning-shade)"
  },
  danger: {
    bg: "var(--ion-color-danger-lighter)",
    fg: "var(--ion-color-danger-shade)"
  },
  primary: {
    bg: "var(--ion-color-secondary)",
    fg: "var(--ion-color-primary)"
  }
};
const DEFAULT_BADGE_ICON = {
  info: "fa-solid fa-circle-info",
  success: "fa-solid fa-check",
  warning: "fa-solid fa-clock",
  danger: "fa-solid fa-xmark"
};

/**
 * Spreekuur ListItem — recreates ds-native-list-item. A tappable white row,
 * 48px tall for a title-only row, growing as content lines are added.
 * Vertically-centered leading icon, a content block
 * (title / subtitle / status badge / note) and a trailing area
 * (notification count + detail icon). Stack rows inside <List>.
 */
function ListItem({
  title,
  subtitle,
  subtitleIcon,
  subtitleAsPill = false,
  badge,
  badgeType = "info",
  badgeIcon,
  note,
  icon,
  thumbnail,
  notificationCount,
  detailIcon,
  showChevron = true,
  onClick,
  disabled = false,
  style
}) {
  const badgePal = BADGE_PALETTE[badgeType] || BADGE_PALETTE.info;
  const resolvedBadgeIcon = badgeIcon === null ? null : badgeIcon || DEFAULT_BADGE_ICON[badgeType];
  const subtitleEl = subtitle != null && (subtitleAsPill ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 3,
      padding: "0 10px",
      height: 20,
      borderRadius: "var(--radius-pill)",
      background: "var(--ion-color-light-shade)",
      color: "var(--ion-color-dark)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--weight-medium)"
    }
  }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
    className: subtitleIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 12
    }
  }), subtitle) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      marginTop: 0,
      fontSize: 14,
      lineHeight: "18px",
      color: "var(--text-secondary)"
    }
  }, subtitleIcon && /*#__PURE__*/React.createElement("i", {
    className: subtitleIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 13,
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("span", null, subtitle)));
  return /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? undefined : onClick,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "10px 16px",
      background: "var(--surface-card)",
      cursor: onClick && !disabled ? "pointer" : "default",
      fontFamily: "var(--font-body)",
      minHeight: 44,
      boxSizing: "border-box",
      opacity: disabled ? 0.5 : 1,
      transition: "background var(--duration-fast) var(--ease-standard)",
      ...style
    },
    onMouseEnter: e => {
      if (onClick && !disabled) e.currentTarget.style.background = "var(--ion-color-light)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = "var(--surface-card)";
    }
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true",
    style: {
      color: "var(--ion-color-primary)",
      fontSize: 16,
      width: 16,
      height: 16,
      lineHeight: "16px",
      textAlign: "center",
      flex: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 16,
      lineHeight: "24px",
      color: "var(--text-default)"
    }
  }, title), subtitleEl, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 3,
      padding: "0 10px",
      height: 20,
      borderRadius: "var(--radius-pill)",
      fontSize: 14,
      lineHeight: "20px",
      fontWeight: "var(--weight-medium)",
      color: badgePal.fg,
      background: badgePal.bg
    }
  }, resolvedBadgeIcon && /*#__PURE__*/React.createElement("i", {
    className: resolvedBadgeIcon,
    "aria-hidden": "true",
    style: {
      fontSize: 12
    }
  }), badge), note && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      fontSize: 13,
      lineHeight: "18px",
      color: "var(--ion-color-medium-tint)"
    }
  }, note)), thumbnail && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-sm)",
      background: "var(--ion-color-light)",
      flex: "none",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, typeof thumbnail === "string" ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-image",
    style: {
      color: "var(--color-placeholder)"
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      flex: "none"
    }
  }, notificationCount != null && /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 20,
      height: 20,
      padding: "0 6px",
      borderRadius: "var(--radius-pill)",
      background: "var(--ion-color-danger)",
      color: "#fff",
      fontSize: 12,
      fontWeight: "var(--weight-semibold)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxSizing: "border-box"
    }
  }, notificationCount), (showChevron || detailIcon) && /*#__PURE__*/React.createElement("i", {
    className: detailIcon || "fa-solid fa-chevron-right",
    "aria-hidden": "true",
    style: {
      color: "var(--ion-color-primary)",
      fontSize: 16,
      width: 16,
      textAlign: "center"
    }
  })));
}

/**
 * List — the inset rounded container that groups ListItems with hairline
 * dividers (no shadow, no hard outer border).
 */
function List({
  children,
  style
}) {
  const items = React.Children.toArray(children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-md)",
      overflow: "hidden",
      background: "var(--surface-card)",
      ...style
    }
  }, items.map((child, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: i > 0 ? {
      borderTop: "1px solid rgba(71,80,85,0.08)"
    } : undefined
  }, child)));
}
Object.assign(__ds_scope, { ListItem, List });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ListSection.jsx
try { (() => {
/**
 * Spreekuur ListSection — an optional bold section label above a grouped list
 * (e.g. "Algemeen", "Dossier ophalen" on the settings screen). Renders the
 * label, then its children (usually a <List>), with vertical rhythm between
 * sections.
 */
function ListSection({
  label,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      fontFamily: "var(--font-body)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: "0 0 8px 2px",
      fontFamily: "var(--font-body)",
      fontWeight: "var(--weight-bold)",
      fontSize: 16,
      lineHeight: "26px",
      color: "var(--text-default)"
    }
  }, label), children);
}
Object.assign(__ds_scope, { ListSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ListSection.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProgressBar.jsx
try { (() => {
/**
 * Spreekuur ProgressBar — the segmented wizard progress used in the
 * bottom footer of multi-step flows. Thin teal fill on a light track,
 * with an optional "X van Y" step counter.
 */
function ProgressBar({
  value = 0,
  currentStep,
  totalSteps,
  separator = "van",
  showCounter,
  style
}) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  const counter = showCounter ?? (currentStep != null && totalSteps != null);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 6,
      borderRadius: "var(--radius-pill)",
      background: "var(--ion-color-secondary-shade)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: "var(--ion-color-primary)",
      transition: "width var(--duration-slow) var(--ease-standard)"
    }
  })), counter && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: "var(--weight-medium)",
      color: "var(--text-secondary)",
      whiteSpace: "nowrap"
    }
  }, currentStep, " ", separator, " ", totalSteps));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/complex/Wizard.jsx
try { (() => {
const {
  useState
} = React;
/**
 * Spreekuur Wizard — ds-native wizard shell. A full-bleed modal with a header
 * (per-step title + close X), a scrollable content area, and a footer with the
 * "X van Y" progress bar plus the Vorige / Volgende (Afronden) button pair.
 * Manages step state internally from a `steps` array.
 */
function Wizard({
  steps = [],
  onClose,
  onFinish,
  startStep = 1,
  nextLabel = "Volgende",
  prevLabel = "Vorige",
  finishLabel = "Afronden",
  separator = "van",
  style
}) {
  const [step, setStep] = useState(startStep);
  const total = steps.length || 1;
  const current = steps[step - 1] || {};
  const isLast = step >= total;
  const next = () => isLast ? onFinish && onFinish() : setStep(step + 1);
  const prev = () => step > 1 && setStep(step - 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-app)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      height: 56,
      padding: "0 8px",
      borderBottom: "1px solid var(--color-divider)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: "center",
      fontSize: 16,
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-default)"
    }
  }, current.title || `Stap ${step}`), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Sluiten",
    style: {
      width: 40,
      height: 40,
      border: "none",
      background: "transparent",
      color: "var(--ion-color-primary)",
      fontSize: 20,
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-xmark",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: 16
    }
  }, current.content), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--color-divider)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: step / total,
    currentStep: step,
    totalSteps: total,
    separator: separator,
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    expand: true,
    iconLeft: "fa-solid fa-arrow-left",
    onClick: prev,
    disabled: step === 1
  }, prevLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    expand: true,
    iconRight: isLast ? undefined : "fa-solid fa-arrow-right",
    onClick: next
  }, isLast ? finishLabel : nextLabel))));
}
Object.assign(__ds_scope, { Wizard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/complex/Wizard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SegmentBar.jsx
try { (() => {
/**
 * Spreekuur SegmentBar — the two-or-more-way switcher that sits directly under
 * the header (e.g. Komend / Historie on Afspraken). Full-width equal segments,
 * the active one in petrol-teal semibold with a teal underline; inactive in
 * medium grey. A hairline divider runs along the bottom.
 */
function SegmentBar({
  options = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      background: "var(--surface-card)",
      borderBottom: "1px solid var(--color-divider)",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, options.map(o => {
    const id = o.id ?? o;
    const label = o.label ?? o;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onChange && onChange(id),
      style: {
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "14px 8px",
        fontSize: 16,
        fontFamily: "var(--font-body)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-regular)",
        color: on ? "var(--ion-color-primary)" : "var(--ion-color-medium)",
        borderBottom: on ? "3px solid var(--ion-color-primary)" : "3px solid transparent",
        marginBottom: -1,
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SegmentBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TabBar.jsx
try { (() => {
/* The four standard patient-app tab glyphs, as outline + solid pairs so the
   active tab can switch to a filled teal icon. Geometry is taken verbatim from
   the Figma "SU_Menu portaal" export (24px source frame); each glyph carries
   its own viewBox so the shapes stay pixel-accurate. Colour comes from
   currentColor: dark slate when inactive, teal when active. */
const ICONS = {
  house: {
    viewBox: "47.5 11.5 19 19",
    outline: "M56.5142 13.1781C56.7955 12.9406 57.2049 12.9406 57.4861 13.1781L65.7361 20.1781C66.0517 20.4469 66.0924 20.9187 65.8236 21.2344C65.5549 21.55 65.083 21.5875 64.7674 21.3219L63.9986 20.6719V26.5C63.9986 27.8813 62.8799 29 61.4986 29H52.4986C51.1174 29 49.9986 27.8813 49.9986 26.5V20.6719L49.233 21.3219C48.9174 21.5906 48.4424 21.55 48.1767 21.2344C47.9111 20.9187 47.9486 20.4437 48.2642 20.1781L56.5142 13.1781ZM56.9986 14.7344L51.4986 19.4V26.5C51.4986 27.0531 51.9455 27.5 52.4986 27.5H53.9986V22.75C53.9986 22.0594 54.558 21.5 55.2486 21.5H58.7486C59.4392 21.5 59.9986 22.0594 59.9986 22.75V27.5H61.4986C62.0517 27.5 62.4986 27.0531 62.4986 26.5V19.4L56.9986 14.7344ZM55.4986 27.5H58.4986V23H55.4986V27.5Z",
    solid: "M65.9953 20.9851C65.9953 21.5476 65.5265 21.9883 64.9952 21.9883H63.9951L64.017 26.9949C64.017 27.0793 64.0107 27.1637 64.0014 27.2481V27.7513C64.0014 28.4419 63.4419 29.0014 62.7513 29.0014H62.2512C62.2168 29.0014 62.1825 29.0014 62.1481 28.9982C62.1043 29.0014 62.0606 29.0014 62.0168 29.0014H61.0011H60.251C59.5604 29.0014 59.0009 28.4419 59.0009 27.7513V27.0012V25.001C59.0009 24.4478 58.554 24.0009 58.0009 24.0009H56.0007C55.4475 24.0009 55.0006 24.4478 55.0006 25.001V27.0012V27.7513C55.0006 28.4419 54.4412 29.0014 53.7505 29.0014H53.0004H52.0035C51.9566 29.0014 51.9097 28.9982 51.8628 28.9951C51.8253 28.9982 51.7878 29.0014 51.7503 29.0014H51.2503C50.5596 29.0014 50.0002 28.4419 50.0002 27.7513V24.251C50.0002 24.2228 50.0002 24.1916 50.0033 24.1635V21.9883H49.0001C48.4375 21.9883 48 21.5507 48 20.9851C48 20.7038 48.0938 20.4538 48.3125 20.235L56.3257 13.25C56.5445 13.0313 56.7945 13 57.0133 13C57.232 13 57.4821 13.0625 57.6696 13.2188L65.6515 20.235C65.9015 20.4538 66.0265 20.7038 65.9953 20.9851Z"
  },
  chat: {
    viewBox: "129.5 11.5 19 19",
    outline: "M136.256 25.0281C135.787 24.8594 135.266 24.9312 134.862 25.2281C134.606 25.4156 134.166 25.6906 133.631 25.9375C133.806 25.4781 133.941 24.9594 133.984 24.3938C134.016 23.9906 133.881 23.5906 133.616 23.2844C132.887 22.4625 132.5 21.5 132.5 20.5C132.5 18.0156 135.103 15.5 139 15.5C142.897 15.5 145.5 18.0156 145.5 20.5C145.5 22.9844 142.897 25.5 139 25.5C138.012 25.5 137.084 25.3281 136.256 25.0281ZM131.822 26.2437C131.772 26.3281 131.719 26.4125 131.663 26.4969L131.653 26.5125C131.603 26.5844 131.553 26.6562 131.503 26.7281C131.394 26.875 131.275 27.0187 131.15 27.15C131.006 27.2937 130.966 27.5063 131.044 27.6938C131.122 27.8813 131.303 28.0031 131.506 28.0031C131.666 28.0031 131.825 27.9937 131.984 27.9781L132.006 27.975C132.144 27.9594 132.281 27.9406 132.419 27.9156C132.444 27.9125 132.469 27.9062 132.494 27.9C133.05 27.7906 133.584 27.6031 134.059 27.3969C134.775 27.0844 135.384 26.7125 135.756 26.4406C136.75 26.8 137.85 27 139.009 27C143.428 27 147.009 24.0906 147.009 20.5C147.009 16.9094 143.419 14 139 14C134.581 14 131 16.9094 131 20.5C131 21.9094 131.553 23.2125 132.491 24.2781C132.431 25.0437 132.134 25.725 131.822 26.2437ZM135.5 21.5C135.765 21.5 136.02 21.3946 136.207 21.2071C136.395 21.0196 136.5 20.7652 136.5 20.5C136.5 20.2348 136.395 19.9804 136.207 19.7929C136.02 19.6054 135.765 19.5 135.5 19.5C135.235 19.5 134.98 19.6054 134.793 19.7929C134.605 19.9804 134.5 20.2348 134.5 20.5C134.5 20.7652 134.605 21.0196 134.793 21.2071C134.98 21.3946 135.235 21.5 135.5 21.5ZM140 20.5C140 20.2348 139.895 19.9804 139.707 19.7929C139.52 19.6054 139.265 19.5 139 19.5C138.735 19.5 138.48 19.6054 138.293 19.7929C138.105 19.9804 138 20.2348 138 20.5C138 20.7652 138.105 21.0196 138.293 21.2071C138.48 21.3946 138.735 21.5 139 21.5C139.265 21.5 139.52 21.3946 139.707 21.2071C139.895 21.0196 140 20.7652 140 20.5ZM142.5 21.5C142.765 21.5 143.02 21.3946 143.207 21.2071C143.395 21.0196 143.5 20.7652 143.5 20.5C143.5 20.2348 143.395 19.9804 143.207 19.7929C143.02 19.6054 142.765 19.5 142.5 19.5C142.235 19.5 141.98 19.6054 141.793 19.7929C141.605 19.9804 141.5 20.2348 141.5 20.5C141.5 20.7652 141.605 21.0196 141.793 21.2071C141.98 21.3946 142.235 21.5 142.5 21.5Z",
    solid: "M139.002 27C143.42 27 147.002 24.0906 147.002 20.5C147.002 16.9094 143.42 14 139.002 14C134.583 14 131.002 16.9094 131.002 20.5C131.002 21.9094 131.555 23.2125 132.492 24.2781C132.433 25.0437 132.136 25.725 131.823 26.2437C131.652 26.5312 131.477 26.7625 131.348 26.9187C131.283 26.9969 131.233 27.0563 131.195 27.0969C131.177 27.1156 131.164 27.1312 131.155 27.1406L131.145 27.15C131.002 27.2937 130.961 27.5063 131.039 27.6938C131.117 27.8813 131.298 28.0031 131.502 28.0031C132.398 28.0031 133.302 27.725 134.052 27.4C134.767 27.0875 135.377 26.7156 135.748 26.4438C136.742 26.8031 137.842 27.0031 139.002 27.0031V27ZM135.002 19.5C135.267 19.5 135.521 19.6054 135.709 19.7929C135.896 19.9804 136.002 20.2348 136.002 20.5C136.002 20.7652 135.896 21.0196 135.709 21.2071C135.521 21.3946 135.267 21.5 135.002 21.5C134.736 21.5 134.482 21.3946 134.295 21.2071C134.107 21.0196 134.002 20.7652 134.002 20.5C134.002 20.2348 134.107 19.9804 134.295 19.7929C134.482 19.6054 134.736 19.5 135.002 19.5ZM139.002 19.5C139.267 19.5 139.521 19.6054 139.709 19.7929C139.896 19.9804 140.002 20.2348 140.002 20.5C140.002 20.7652 139.896 21.0196 139.709 21.2071C139.521 21.3946 139.267 21.5 139.002 21.5C138.736 21.5 138.482 21.3946 138.295 21.2071C138.107 21.0196 138.002 20.7652 138.002 20.5C138.002 20.2348 138.107 19.9804 138.295 19.7929C138.482 19.6054 138.736 19.5 139.002 19.5ZM142.002 20.5C142.002 20.2348 142.107 19.9804 142.295 19.7929C142.482 19.6054 142.736 19.5 143.002 19.5C143.267 19.5 143.521 19.6054 143.709 19.7929C143.896 19.9804 144.002 20.2348 144.002 20.5C144.002 20.7652 143.896 21.0196 143.709 21.2071C143.521 21.3946 143.267 21.5 143.002 21.5C142.736 21.5 142.482 21.3946 142.295 21.2071C142.107 21.0196 142.002 20.7652 142.002 20.5Z"
  },
  folder: {
    viewBox: "211.5 11.5 19 19",
    outline: "M213 16C213 14.8969 213.897 14 215 14H219.128C219.725 14 220.297 14.2375 220.719 14.6594L222.059 16H227C228.103 16 229 16.8969 229 18V26C229 27.1031 228.103 28 227 28H215C213.897 28 213 27.1031 213 26V16ZM215 15.5C214.725 15.5 214.5 15.725 214.5 16V26C214.5 26.275 214.725 26.5 215 26.5H227C227.275 26.5 227.5 26.275 227.5 26V18C227.5 17.725 227.275 17.5 227 17.5H221.956C221.625 17.5 221.306 17.3688 221.072 17.1344L219.659 15.7188C219.519 15.5781 219.328 15.5 219.128 15.5H215Z",
    solid: "M214.772 19.9941L212 24.7444V16.0001C212 14.8969 212.897 14 214 14H217.672C218.204 14 218.713 14.2094 219.088 14.5844L219.916 15.4126C220.291 15.7876 220.801 15.997 221.332 15.997H225.001C226.104 15.997 227.001 16.8939 227.001 17.9971V18.9972H216.5C215.788 18.9972 215.131 19.3753 214.772 19.991V19.9941ZM215.635 20.4973C215.816 20.1879 216.144 20.0004 216.5 20.0004H229.001C229.361 20.0004 229.689 20.191 229.867 20.5035C230.045 20.8161 230.045 21.1973 229.864 21.5067L226.363 27.5071C226.185 27.8134 225.857 28.0009 225.501 28.0009H213C212.641 28.0009 212.313 27.8103 212.134 27.4978C211.956 27.1852 211.956 26.804 212.138 26.4946L215.638 20.4942L215.635 20.4973Z"
  },
  user: {
    viewBox: "293.5 11.5 19 19",
    outline: "M307.703 25.4875C307.106 24.0281 305.672 23 304 23H302C300.328 23 298.894 24.0281 298.297 25.4875C297.184 24.3188 296.5 22.7406 296.5 21C296.5 17.4094 299.409 14.5 303 14.5C306.591 14.5 309.5 17.4094 309.5 21C309.5 22.7406 308.816 24.3188 307.703 25.4875ZM306.45 26.5094C305.45 27.1375 304.269 27.5 303 27.5C301.731 27.5 300.55 27.1375 299.547 26.5094C299.775 25.3625 300.788 24.5 302 24.5H304C305.212 24.5 306.225 25.3625 306.453 26.5094H306.45ZM303 29C305.122 29 307.157 28.1571 308.657 26.6569C310.157 25.1566 311 23.1217 311 21C311 18.8783 310.157 16.8434 308.657 15.3431C307.157 13.8429 305.122 13 303 13C300.878 13 298.843 13.8429 297.343 15.3431C295.843 16.8434 295 18.8783 295 21C295 23.1217 295.843 25.1566 297.343 26.6569C298.843 28.1571 300.878 29 303 29ZM303 20.5C302.668 20.5 302.351 20.3683 302.116 20.1339C301.882 19.8995 301.75 19.5815 301.75 19.25C301.75 18.9185 301.882 18.6005 302.116 18.3661C302.351 18.1317 302.668 18 303 18C303.332 18 303.649 18.1317 303.884 18.3661C304.118 18.6005 304.25 18.9185 304.25 19.25C304.25 19.5815 304.118 19.8995 303.884 20.1339C303.649 20.3683 303.332 20.5 303 20.5ZM300.25 19.25C300.25 19.9793 300.54 20.6788 301.055 21.1945C301.571 21.7103 302.271 22 303 22C303.729 22 304.429 21.7103 304.945 21.1945C305.46 20.6788 305.75 19.9793 305.75 19.25C305.75 18.5207 305.46 17.8212 304.945 17.3055C304.429 16.7897 303.729 16.5 303 16.5C302.271 16.5 301.571 16.7897 301.055 17.3055C300.54 17.8212 300.25 18.5207 300.25 19.25Z",
    solid: "M307.469 25.0063C306.778 23.8063 305.481 23 304 23H302C300.519 23 299.222 23.8063 298.531 25.0063C299.631 26.2313 301.225 27 303 27C304.775 27 306.369 26.2281 307.469 25.0063ZM295 21C295 18.8783 295.843 16.8434 297.343 15.3431C298.843 13.8429 300.878 13 303 13C305.122 13 307.157 13.8429 308.657 15.3431C310.157 16.8434 311 18.8783 311 21C311 23.1217 310.157 25.1566 308.657 26.6569C307.157 28.1571 305.122 29 303 29C300.878 29 298.843 28.1571 297.343 26.6569C295.843 25.1566 295 23.1217 295 21ZM303 21.5C303.597 21.5 304.169 21.2629 304.591 20.841C305.013 20.419 305.25 19.8467 305.25 19.25C305.25 18.6533 305.013 18.081 304.591 17.659C304.169 17.2371 303.597 17 303 17C302.403 17 301.831 17.2371 301.409 17.659C300.987 18.081 300.75 18.6533 300.75 19.25C300.75 19.8467 300.987 20.419 301.409 20.841C301.831 21.2629 302.403 21.5 303 21.5Z"
  }
};
function TabIcon({
  name,
  active
}) {
  const set = ICONS[name];
  if (!set) return null;
  return /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: set.viewBox,
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: active ? set.solid : set.outline,
    fill: "currentColor"
  }));
}

/**
 * Spreekuur TabBar — the bottom navigation. Four tabs by default
 * (Overzicht, Chats, Dossier, Profiel). The active tab shows a filled teal
 * icon, a teal label and a teal top-rule; inactive tabs are dark slate
 * outline icons. Built-in glyphs: house / chat / folder / user. A tab may
 * instead supply a FontAwesome `icon` class.
 */
function TabBar({
  tabs,
  active,
  onChange,
  style
}) {
  const items = tabs || [{
    id: "overzicht",
    label: "Overzicht",
    glyph: "house"
  }, {
    id: "chats",
    label: "Chats",
    glyph: "chat"
  }, {
    id: "dossier",
    label: "Dossier",
    glyph: "folder"
  }, {
    id: "profiel",
    label: "Profiel",
    glyph: "user"
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      background: "var(--surface-card)",
      borderTop: "1px solid var(--color-divider)",
      minHeight: 60,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, items.map(t => {
    const on = t.id === active;
    const color = on ? "var(--ion-color-primary)" : "var(--ion-color-dark)";
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange && onChange(t.id),
      style: {
        position: "relative",
        flex: 1,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        padding: "8px 0",
        color
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "62%",
        height: 3,
        borderRadius: "0 0 3px 3px",
        background: "var(--ion-color-primary)"
      }
    }), t.glyph ? /*#__PURE__*/React.createElement(TabIcon, {
      name: t.glyph,
      active: on
    }) : t.node ? t.node : /*#__PURE__*/React.createElement("i", {
      className: t.icon,
      "aria-hidden": "true",
      style: {
        fontSize: 20
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        lineHeight: "16px",
        fontFamily: "var(--font-body)",
        fontWeight: on ? "var(--weight-semibold)" : "var(--weight-medium)"
      }
    }, t.label));
  }));
}
Object.assign(__ds_scope, { TabBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TabBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent/agent-screens.jsx
try { (() => {
/* Spreekuur Agent — screen compositions for the design canvas. */

(() => {
  const SC = window.SpreekuurDesignSystem_5ed928;
  const {
    ChatShell,
    AgentBubble,
    PatientBubble,
    CareBubble,
    SystemNote,
    TypingIndicator,
    Chip,
    ChipRow,
    AgentAvatar,
    Sparkle
  } = window;
  const {
    TimeSlotPicker,
    MedicationPicker,
    EConsultCard,
    TriageQuestion,
    AdviceCard,
    UrgentCard,
    ConfirmCard
  } = window;

  /* ============ 1. Overzicht met agent-ingang ============ */
  function OverviewScreen() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 844,
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-app)",
        fontFamily: "var(--font-body)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-default)",
        background: "var(--surface-app)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-signal"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-wifi"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-battery-full"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 16px 0",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 30,
        lineHeight: "38px",
        margin: 0
      }
    }, "Goedemiddag,", /*#__PURE__*/React.createElement("br", null), "Henk"), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Meldingen",
      style: {
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 22,
        cursor: "pointer",
        marginTop: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-bell",
      "aria-hidden": "true"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        borderRadius: 14,
        background: "var(--surface-subtle)",
        border: "1px solid var(--ion-color-secondary-shade)",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: 15
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        color: "var(--ion-color-primary)",
        whiteSpace: "nowrap"
      }
    }, "Spreekuur.nl Agent")), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 19,
        lineHeight: "25px",
        margin: "0 0 10px"
      }
    }, "Waarmee kunnen we je helpen?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 46,
        borderRadius: 23,
        background: "var(--ion-color-white)",
        border: "1px solid var(--color-border)",
        padding: "0 6px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 15,
        color: "var(--text-placeholder)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, "Stel hier je vraag of start een actie"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-primary)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true"
    })))), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        margin: "22px 0 12px"
      }
    }, "Direct regelen"), /*#__PURE__*/React.createElement(SC.List, null, /*#__PURE__*/React.createElement(SC.ListItem, {
      icon: "fa-solid fa-comment-dots",
      title: "Vraag stellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(SC.ListItem, {
      icon: "fa-solid fa-folder",
      title: "Dossier ophalen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(SC.ListItem, {
      icon: "fa-solid fa-capsules",
      title: "Medicijnen bestellen",
      onClick: () => {}
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(SC.TabBar, {
      active: "overzicht",
      onChange: () => {}
    })));
  }

  /* ============ 2. Chat start ============ */
  function StartScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(SystemNote, {
      icon: "fa-solid fa-shield-halved"
    }, "Je praat met de digitale assistent van jouw praktijk. Een zorgverlener kan meelezen of aansluiten."), /*#__PURE__*/React.createElement(AgentBubble, null, "Hoi Henk! Vertel in je eigen woorden waar je voor komt. Ik stel soms een paar vragen en regel het daarna direct met je."), /*#__PURE__*/React.createElement(ChipRow, null, /*#__PURE__*/React.createElement(Chip, {
      icon: "fa-solid fa-calendar-days"
    }, "Afspraak maken"), /*#__PURE__*/React.createElement(Chip, {
      icon: "fa-solid fa-capsules"
    }, "Medicijnen bestellen"), /*#__PURE__*/React.createElement(Chip, {
      icon: "fa-solid fa-comment-dots"
    }, "Korte vraag stellen"), /*#__PURE__*/React.createElement(Chip, {
      icon: "fa-solid fa-stethoscope"
    }, "Ik heb een klacht")));
  }

  /* ============ 3. Verduidelijkende vragen + typing ============ */
  function ClarifyScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(PatientBubble, null, "Ik heb sinds gisteren keelpijn"), /*#__PURE__*/React.createElement(AgentBubble, null, "Vervelend! Ik stel je een paar korte vragen, dan weet ik wat we het beste kunnen doen."), /*#__PURE__*/React.createElement(AgentBubble, {
      showAvatar: false
    }, "Hoe lang heb je al klachten?"), /*#__PURE__*/React.createElement(ChipRow, null, /*#__PURE__*/React.createElement(Chip, null, "Sinds vandaag"), /*#__PURE__*/React.createElement(Chip, {
      selected: true
    }, "Sinds gisteren"), /*#__PURE__*/React.createElement(Chip, null, "Langer dan 3 dagen")), /*#__PURE__*/React.createElement(PatientBubble, null, "Sinds gisteren"), /*#__PURE__*/React.createElement(TypingIndicator, null));
  }

  /* ============ 4. Tijdslot kiezen ============ */
  function TimeSlotScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(PatientBubble, null, "Ik wil graag langskomen voor mijn knie"), /*#__PURE__*/React.createElement(AgentBubble, null, "Dat kan! Ik zie ruimte deze week bij jouw praktijk. Kies een moment dat jou uitkomt."), /*#__PURE__*/React.createElement(TimeSlotPicker, null), /*#__PURE__*/React.createElement(SystemNote, null, "Liever telefonisch plannen? Typ \"bel mij\" en de praktijk belt je terug."));
  }

  /* ============ 5. Tijdslot bevestigd ============ */
  function TimeSlotConfirmedScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(TimeSlotPicker, {
      locked: true
    }), /*#__PURE__*/React.createElement(ConfirmCard, {
      title: "Afspraak ingepland",
      rows: [["Datum", "Woensdag 11 juni"], ["Tijd", "10:20 uur"], ["Locatie", "Huisartsenpraktijk Centrum, Hoofdstraat 1"], ["Bij", "Dokter Mertens"]],
      footer: "Je vindt de afspraak ook onder Dossier \u2192 Afspraken. Afzeggen kan tot 24 uur van tevoren."
    }), /*#__PURE__*/React.createElement(PatientBubble, null, "Top, bedankt!"), /*#__PURE__*/React.createElement(AgentBubble, null, "Graag gedaan! Kan ik nog iets anders voor je regelen?"));
  }

  /* ============ 6. Medicatie bestellen ============ */
  function MedicationScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(PatientBubble, null, "Ik wil mijn herhaalmedicatie bestellen"), /*#__PURE__*/React.createElement(AgentBubble, null, "Dit zijn jouw huidige medicijnen. Vink aan wat je wilt bestellen."), /*#__PURE__*/React.createElement(MedicationPicker, null));
  }

  /* ============ 7. Medicatie bevestigd ============ */
  function MedicationConfirmedScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(MedicationPicker, {
      locked: true
    }), /*#__PURE__*/React.createElement(ConfirmCard, {
      title: "Bestelling doorgegeven",
      rows: [["Besteld", "Omeprazol 20 mg, Salbutamol 100 µg"], ["Apotheek", "Apotheek De Linde"], ["Ophalen", "Vanaf vrijdag 13 juni, na 14:00"]],
      footer: "Je krijgt een melding zodra de medicijnen klaarliggen."
    }));
  }

  /* ============ 8. E-consult ============ */
  function EConsultScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(PatientBubble, null, "Mag ik paracetamol gebruiken naast mijn maagbeschermer?"), /*#__PURE__*/React.createElement(AgentBubble, null, "Goede vraag om even aan de praktijk voor te leggen. Klopt deze samenvatting?"), /*#__PURE__*/React.createElement(EConsultCard, null), /*#__PURE__*/React.createElement(SystemNote, null, "Na versturen krijg je het antwoord in d\xEDt gesprek. Meestal binnen 1 werkdag."));
  }

  /* ============ 9. Triage-vraag ============ */
  function TriageScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(AgentBubble, null, "Ik stel je een paar vragen over je klacht, zodat ik weet wat je nu het beste kunt doen."), /*#__PURE__*/React.createElement(TriageQuestion, null), /*#__PURE__*/React.createElement(SystemNote, null, "Je kunt elk antwoord ook gewoon typen."));
  }

  /* ============ 10. Zelfzorgadvies ============ */
  function AdviceScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(AgentBubble, null, "Bedankt voor je antwoorden. Goed nieuws: je kunt dit zelf thuis behandelen."), /*#__PURE__*/React.createElement(AdviceCard, null), /*#__PURE__*/React.createElement(ChipRow, null, /*#__PURE__*/React.createElement(Chip, null, "Stuur toch mijn vraag door"), /*#__PURE__*/React.createElement(Chip, null, "Klaar, bedankt")));
  }

  /* ============ 11. Spoed / triage-out ============ */
  function UrgentScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(PatientBubble, null, "Ik heb sinds een uur pijn op mijn borst en tintelende arm"), /*#__PURE__*/React.createElement(UrgentCard, null), /*#__PURE__*/React.createElement(SystemNote, {
      icon: "fa-solid fa-user-nurse"
    }, "De praktijk is op de hoogte gebracht van jouw antwoorden."));
  }

  /* ============ 12. Zorgverlener sluit aan ============ */
  function CareJoinScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, {
      care: true,
      careName: "Esther de Vries",
      careRole: "Doktersassistent \xB7 Huisartsenpraktijk Centrum"
    }, /*#__PURE__*/React.createElement(SystemNote, {
      icon: "fa-solid fa-user-plus"
    }, "Esther de Vries, doktersassistent, doet nu mee aan dit gesprek."), /*#__PURE__*/React.createElement(CareBubble, null, "Hoi Henk, ik heb je antwoorden gelezen. Ik wil je graag vandaag nog even zien. Schikt het rond 16:00?"), /*#__PURE__*/React.createElement(ChipRow, {
      indent: true
    }, /*#__PURE__*/React.createElement(Chip, null, "Ja, 16:00 is goed"), /*#__PURE__*/React.createElement(Chip, null, "Liever ander moment")), /*#__PURE__*/React.createElement(PatientBubble, null, "Ja, 16:00 is goed"), /*#__PURE__*/React.createElement(CareBubble, null, "Fijn! Ik zet je in de agenda. Tot vanmiddag."));
  }

  /* ============ 13. Afsluiting ============ */
  function SummaryScreen() {
    return /*#__PURE__*/React.createElement(ChatShell, null, /*#__PURE__*/React.createElement(AgentBubble, null, "Dat was het! Dit hebben we samen geregeld:"), /*#__PURE__*/React.createElement(ConfirmCard, {
      title: "Samenvatting van dit gesprek",
      rows: [["Klacht", "Keelpijn, sinds gisteren"], ["Triage", "8 vragen beantwoord"], ["Uitkomst", "Afspraak bij Dokter Mertens"], ["Wanneer", "Vandaag om 16:00 uur"]],
      footer: "Deze samenvatting staat ook in je dossier. Word je klachten erger? Start dan gerust een nieuw gesprek."
    }), /*#__PURE__*/React.createElement(ChipRow, null, /*#__PURE__*/React.createElement(Chip, null, "Nieuw gesprek starten"), /*#__PURE__*/React.createElement(Chip, null, "Terug naar overzicht")));
  }
  Object.assign(window, {
    OverviewScreen,
    StartScreen,
    ClarifyScreen,
    TimeSlotScreen,
    TimeSlotConfirmedScreen,
    MedicationScreen,
    MedicationConfirmedScreen,
    EConsultScreen,
    TriageScreen,
    AdviceScreen,
    UrgentScreen,
    CareJoinScreen,
    SummaryScreen
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent/agent-screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent/agent-ui.jsx
try { (() => {
/* Spreekuur Agent — chat UI primitives (shell, bubbles, chips, input).
   Three sender styles: agent (white + sparkle avatar), patient (solid teal,
   right), zorgverlener (soft cyan + photo avatar + name/rol). */

(() => {
  const A = window.SpreekuurDesignSystem_5ed928;

  /* ---- Sparkle glyph (agent icon) ---- */
  function Sparkle({
    size = 16,
    color = "var(--ion-color-primary)"
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      style: {
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z",
      fill: color
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 2.5 L19.9 5.1 L22.5 6 L19.9 6.9 L19 9.5 L18.1 6.9 L15.5 6 L18.1 5.1 Z",
      fill: color,
      opacity: "0.75"
    }));
  }
  function AgentAvatar({
    size = 32
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        flex: "none",
        borderRadius: "50%",
        background: "var(--surface-accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: size * 0.5
    }));
  }
  function CareAvatar({
    size = 32
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-light-shade)",
        color: "var(--ion-color-medium)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size * 0.45
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-user-nurse",
      "aria-hidden": "true"
    }));
  }

  /* ---- Phone chat shell ---- */
  function ChatShell({
    title = "Assistent",
    subtitle = "Digitale assistent",
    care = false,
    careName,
    careRole,
    children,
    inputPlaceholder = "Typ je bericht…",
    height = 844
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height,
        display: "flex",
        flexDirection: "column",
        background: "var(--surface-app)",
        fontFamily: "var(--font-body)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-default)",
        background: "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-signal"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-wifi"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-battery-full"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-left",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 18,
        padding: 8
      }
    }), care ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(CareAvatar, {
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: -10,
        border: "2px solid var(--surface-card)",
        borderRadius: "50%"
      }
    }, /*#__PURE__*/React.createElement(AgentAvatar, {
      size: 32
    }))) : /*#__PURE__*/React.createElement(AgentAvatar, {
      size: 36
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "22px",
        color: "var(--text-default)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, care ? careName : title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: "17px",
        color: "var(--text-secondary)"
      }
    }, care ? careRole : subtitle)), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-info",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 18,
        padding: 8
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        overflow: "hidden"
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px 26px",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 48,
        borderRadius: 24,
        border: "1px solid var(--color-border)",
        background: "var(--ion-color-white)",
        display: "flex",
        alignItems: "center",
        padding: "0 18px",
        color: "var(--text-placeholder)",
        fontSize: 16
      }
    }, inputPlaceholder), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Versturen",
      style: {
        width: 48,
        height: 48,
        flex: "none",
        borderRadius: "50%",
        border: "none",
        background: "var(--ion-color-primary)",
        color: "#fff",
        fontSize: 18,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true"
    }))));
  }

  /* ---- Bubbles ---- */
  function AgentBubble({
    children,
    label = "Assistent",
    showAvatar = true,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end",
        maxWidth: "100%"
      }
    }, showAvatar ? /*#__PURE__*/React.createElement(AgentAvatar, null) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 1 auto",
        minWidth: 0,
        maxWidth: 286,
        ...style
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        padding: "12px 14px",
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, children)));
  }
  function PatientBubble({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 286,
        background: "var(--ion-color-primary)",
        color: "#fff",
        borderRadius: "16px 16px 4px 16px",
        padding: "12px 14px",
        fontSize: 16,
        lineHeight: "23px"
      }
    }, children));
  }
  function CareBubble({
    children,
    name = "Esther de Vries",
    role = "Doktersassistent"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(CareAvatar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 1 auto",
        maxWidth: 286
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)",
        margin: "0 0 3px 4px"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        color: "var(--text-default)",
        fontWeight: "var(--weight-semibold)"
      }
    }, name), " \xB7 ", role), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-subtle)",
        borderRadius: "16px 16px 16px 4px",
        padding: "12px 14px",
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, children)));
  }
  function SystemNote({
    children,
    icon
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "2px 24px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--text-secondary)",
        textAlign: "center"
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), /*#__PURE__*/React.createElement("span", null, children)));
  }
  function TypingIndicator() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(AgentAvatar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        padding: "16px 18px",
        display: "flex",
        gap: 5
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--color-divider)",
        animation: `agent-typing 1.2s ${i * 0.18}s infinite`
      }
    })), /*#__PURE__*/React.createElement("style", null, `@keyframes agent-typing { 0%,60%,100% { opacity:.4; transform:translateY(0);} 30% { opacity:1; transform:translateY(-3px);} } @media (prefers-reduced-motion: reduce){ span{animation:none!important} }`)));
  }

  /* ---- Chips (answer options / suggestions) ---- */
  function Chip({
    children,
    icon,
    selected = false,
    onClick,
    style
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        minHeight: 44,
        padding: "10px 18px",
        borderRadius: 24,
        border: `1.5px solid ${selected ? "var(--ion-color-primary)" : "var(--ion-color-primary)"}`,
        background: selected ? "var(--ion-color-primary)" : "var(--ion-color-white)",
        color: selected ? "#fff" : "var(--ion-color-primary)",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        fontWeight: "var(--weight-medium)",
        cursor: "pointer",
        textAlign: "left",
        ...style
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        fontSize: 14
      }
    }), children);
  }
  function ChipRow({
    children,
    indent = true,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        paddingLeft: indent ? 42 : 0,
        ...style
      }
    }, children);
  }
  Object.assign(window, {
    Sparkle,
    AgentAvatar,
    CareAvatar,
    ChatShell,
    AgentBubble,
    PatientBubble,
    CareBubble,
    SystemNote,
    TypingIndicator,
    Chip,
    ChipRow
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent/agent-ui.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent/agent-widgets.jsx
try { (() => {
/* Spreekuur Agent — in-chat widgets. Each widget lives inside an agent
   bubble; every widget has an active and a locked (afgerond) state so the
   chat history stays correct. */

(() => {
  const AW = window.SpreekuurDesignSystem_5ed928;

  /* Generic widget frame inside an agent bubble */
  function Widget({
    title,
    icon,
    locked = false,
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(window.AgentAvatar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        maxWidth: 300,
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        overflow: "hidden",
        opacity: locked ? 0.92 : 1,
        ...style
      }
    }, title && /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "12px 14px 0",
        fontWeight: "var(--weight-semibold)",
        fontSize: 15,
        color: "var(--text-default)"
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 14
      }
    }), title, locked && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-lock",
      "aria-hidden": "true",
      style: {
        marginLeft: "auto",
        color: "var(--color-placeholder)",
        fontSize: 12
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "10px 14px 14px"
      }
    }, children)));
  }

  /* ---- 1. Tijdslot-picker ---- */
  function TimeSlotPicker({
    locked = false,
    chosen = "Wo 11 jun · 10:20"
  }) {
    const days = ["Vandaag", "Morgen", "Wo 11 jun"];
    const times = ["08:40", "09:10", "10:20", "11:50", "14:30"];
    if (locked) {
      return /*#__PURE__*/React.createElement(Widget, {
        title: "Afspraak kiezen",
        icon: "fa-solid fa-calendar-days",
        locked: true
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "6px 0 2px"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-circle-check",
        "aria-hidden": "true",
        style: {
          color: "var(--ion-color-success)",
          fontSize: 18
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15,
          color: "var(--text-default)"
        }
      }, "Gekozen: ", /*#__PURE__*/React.createElement("strong", null, chosen))));
    }
    return /*#__PURE__*/React.createElement(Widget, {
      title: "Kies een moment",
      icon: "fa-solid fa-calendar-days"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 6,
        marginBottom: 10
      }
    }, days.map((d, i) => /*#__PURE__*/React.createElement("button", {
      key: d,
      style: {
        flex: 1,
        minHeight: 40,
        borderRadius: 10,
        border: i === 2 ? "none" : "1px solid var(--color-divider)",
        background: i === 2 ? "var(--ion-color-primary)" : "var(--ion-color-white)",
        color: i === 2 ? "#fff" : "var(--text-default)",
        fontFamily: "var(--font-body)",
        fontSize: 13.5,
        fontWeight: "var(--weight-medium)",
        cursor: "pointer"
      }
    }, d))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: 6
      }
    }, times.map(t => /*#__PURE__*/React.createElement("button", {
      key: t,
      style: {
        minHeight: 44,
        borderRadius: 10,
        border: t === "10:20" ? "none" : "1.5px solid var(--ion-color-primary)",
        background: t === "10:20" ? "var(--ion-color-primary)" : "var(--ion-color-white)",
        color: t === "10:20" ? "#fff" : "var(--ion-color-primary)",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer"
      }
    }, t)), /*#__PURE__*/React.createElement("button", {
      style: {
        minHeight: 44,
        borderRadius: 10,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        cursor: "pointer"
      }
    }, "Meer\u2026")), /*#__PURE__*/React.createElement(AW.Button, {
      expand: true,
      style: {
        marginTop: 12
      }
    }, "Bevestig afspraak"));
  }

  /* ---- 2. Medicatielijst ---- */
  function MedicationPicker({
    locked = false
  }) {
    const meds = [{
      name: "Omeprazol 20 mg",
      sub: "1x per dag · maagbeschermer",
      on: true
    }, {
      name: "Salbutamol 100 µg",
      sub: "inhalator · zo nodig",
      on: true
    }, {
      name: "Cetirizine 10 mg",
      sub: "1x per dag · hooikoorts",
      on: false
    }];
    if (locked) {
      return /*#__PURE__*/React.createElement(Widget, {
        title: "Medicijnen bestellen",
        icon: "fa-solid fa-capsules",
        locked: true
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column",
          gap: 8,
          padding: "4px 0 2px"
        }
      }, meds.filter(m => m.on).map(m => /*#__PURE__*/React.createElement("div", {
        key: m.name,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-circle-check",
        "aria-hidden": "true",
        style: {
          color: "var(--ion-color-success)",
          fontSize: 16
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 15
        }
      }, m.name)))));
    }
    return /*#__PURE__*/React.createElement(Widget, {
      title: "Welke medicijnen wil je bestellen?",
      icon: "fa-solid fa-capsules"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, meds.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 0",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.08)" : "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: "none",
        borderRadius: 5,
        border: m.on ? "none" : "2px solid var(--color-checkbox-border)",
        background: m.on ? "var(--ion-color-primary)" : "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, m.on && /*#__PURE__*/React.createElement("svg", {
      width: "13",
      height: "13",
      viewBox: "0 0 24 24",
      fill: "none"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M5 13l4 4L19 7",
      stroke: "#fff",
      strokeWidth: "3",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)"
      }
    }, m.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, m.sub))))), /*#__PURE__*/React.createElement(AW.Button, {
      expand: true,
      style: {
        marginTop: 8
      }
    }, "Bestel 2 medicijnen"));
  }

  /* ---- 3. E-consult bevestiging ---- */
  function EConsultCard() {
    return /*#__PURE__*/React.createElement(Widget, {
      title: "Jouw vraag aan de praktijk",
      icon: "fa-solid fa-comment-dots"
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "2px 0 10px",
        fontSize: 15,
        lineHeight: "22px",
        color: "var(--text-default)"
      }
    }, "\"Mag ik paracetamol combineren met mijn maagbeschermer (omeprazol)?\""), /*#__PURE__*/React.createElement("button", {
      style: {
        width: "100%",
        minHeight: 48,
        borderRadius: 10,
        border: "1.5px dashed var(--color-border)",
        background: "var(--surface-app)",
        color: "var(--text-secondary)",
        fontFamily: "var(--font-body)",
        fontSize: 14.5,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-camera",
      "aria-hidden": "true"
    }), "Foto toevoegen (optioneel)"), /*#__PURE__*/React.createElement(AW.Button, {
      expand: true,
      style: {
        marginTop: 10
      }
    }, "Verstuur vraag"), /*#__PURE__*/React.createElement("button", {
      style: {
        width: "100%",
        minHeight: 40,
        marginTop: 2,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontFamily: "var(--font-body)",
        fontSize: 15,
        fontWeight: "var(--weight-medium)",
        cursor: "pointer"
      }
    }, "Vraag aanpassen"));
  }

  /* ---- 4. Triage vraag ---- */
  function TriageQuestion({
    q = "Heb je ook koorts (38°C of hoger)?",
    step = 3,
    total = 8,
    options = ["Ja", "Nee", "Weet ik niet"]
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(window.AgentAvatar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        maxWidth: 300,
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-secondary)",
        whiteSpace: "nowrap"
      }
    }, "Vraag ", step, " van ", total), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        background: "var(--ion-color-secondary-shade)",
        overflow: "hidden",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: `${step / total * 100}%`,
        height: "100%",
        background: "var(--ion-color-primary)",
        borderRadius: 2
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, q))), /*#__PURE__*/React.createElement(window.ChipRow, null, options.map(o => /*#__PURE__*/React.createElement(window.Chip, {
      key: o
    }, o))));
  }

  /* ---- 5. Zelfzorgadvies ---- */
  function AdviceCard() {
    const steps = ["Drink regelmatig kleine slokjes (koud of lauw).", "Neem zo nodig paracetamol volgens de bijsluiter.", "Rust uit; keelpijn gaat meestal binnen 7 dagen over."];
    return /*#__PURE__*/React.createElement(Widget, {
      title: "Advies voor jouw keelpijn",
      icon: "fa-solid fa-heart"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        margin: "4px 0 12px"
      }
    }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        flex: "none",
        borderRadius: "50%",
        background: "var(--surface-accent)",
        color: "var(--ion-color-primary)",
        fontSize: 12.5,
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        lineHeight: "21px",
        color: "var(--text-default)"
      }
    }, s)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 10,
        background: "var(--ion-color-warning-lighter)",
        padding: "10px 12px",
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-exclamation",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-warning-shade)",
        fontSize: 15,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--text-default)"
      }
    }, "Neem t\xF3ch contact op als je benauwd wordt, niet meer kunt slikken, of na 7 dagen geen verbetering voelt.")));
  }

  /* ---- 6. Spoed / triage-out ---- */
  function UrgentCard() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "4px 0",
        borderRadius: 16,
        overflow: "hidden",
        border: "2px solid var(--ion-color-danger)",
        background: "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 16px",
        background: "var(--ion-color-danger)",
        color: "#fff"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-triangle-exclamation",
      "aria-hidden": "true",
      style: {
        fontSize: 18
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-black)",
        fontSize: 18
      }
    }, "Bel direct de praktijk")), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 14px",
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, "Jouw klachten kunnen ernstig zijn. Wacht niet en bel nu \u2014 de praktijk weet dat je belt."), /*#__PURE__*/React.createElement("button", {
      style: {
        width: "100%",
        minHeight: 56,
        borderRadius: "var(--radius-control)",
        border: "none",
        background: "var(--ion-color-danger)",
        color: "#fff",
        fontFamily: "var(--font-body)",
        fontSize: 18,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-phone",
      "aria-hidden": "true"
    }), "Bel 088 - 123 45 67"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontSize: 14,
        lineHeight: "19px",
        color: "var(--text-secondary)",
        textAlign: "center"
      }
    }, "Levensbedreigend? Bel ", /*#__PURE__*/React.createElement("strong", null, "112"), ".")));
  }

  /* ---- 7. Bevestigings-/afsluitkaart ---- */
  function ConfirmCard({
    title,
    rows = [],
    footer
  }) {
    return /*#__PURE__*/React.createElement(Widget, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-success-lighter)",
        color: "var(--ion-color-success)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 16
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-check",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: "var(--weight-black)",
        fontSize: 17,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 7
      }
    }, rows.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
      key: k,
      style: {
        display: "flex",
        gap: 10,
        fontSize: 15,
        lineHeight: "21px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 88,
        flex: "none",
        color: "var(--text-secondary)"
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        color: "var(--text-default)",
        fontWeight: "var(--weight-medium)"
      }
    }, v)))), footer && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "10px 0 0",
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--text-secondary)"
      }
    }, footer));
  }
  Object.assign(window, {
    Widget,
    TimeSlotPicker,
    MedicationPicker,
    EConsultCard,
    TriageQuestion,
    AdviceCard,
    UrgentCard,
    ConfirmCard
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent/agent-widgets.jsx", error: String((e && e.message) || e) }); }

// ui_kits/agent/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/agent/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gezondheidsinformatie/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gezondheidsinformatie/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/gezondheidsinformatie/screens.jsx
try { (() => {
/* Spreekuur — Gezondheidsinformatie (standalone Thuisarts-zoekfunctie).
   All screens for the design canvas. Wrapped in an IIFE to avoid global
   scope collisions with other babel scripts. */
(() => {
  const GI = window.SpreekuurDesignSystem_5ed928;

  /* ---------- opslaan-store (star per artikel, gedeeld tussen boards via localStorage) ---------- */
  const SAVE_KEY = "gi_saved_articles_v1";
  const DEFAULT_SAVED = ["Keelpijn bij kinderen", "Koorts bij volwassenen"];
  function readSaved() {
    try {
      const v = JSON.parse(localStorage.getItem(SAVE_KEY));
      return Array.isArray(v) ? v : DEFAULT_SAVED;
    } catch (e) {
      return DEFAULT_SAVED;
    }
  }
  function useSaved() {
    const [saved, setSaved] = React.useState(readSaved);
    React.useEffect(() => {
      const h = () => setSaved(readSaved());
      window.addEventListener("gi-saved-change", h);
      window.addEventListener("storage", h);
      return () => {
        window.removeEventListener("gi-saved-change", h);
        window.removeEventListener("storage", h);
      };
    }, []);
    const toggle = title => {
      const cur = readSaved();
      const next = cur.includes(title) ? cur.filter(t => t !== title) : [...cur, title];
      localStorage.setItem(SAVE_KEY, JSON.stringify(next));
      window.dispatchEvent(new Event("gi-saved-change"));
    };
    return [saved, toggle];
  }
  function StarButton({
    active,
    onClick,
    size = 20
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: onClick,
      "aria-label": active ? "Verwijder uit opgeslagen" : "Artikel opslaan",
      "aria-pressed": active,
      style: {
        width: 40,
        height: 40,
        flex: "none",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: active ? "fa-solid fa-star" : "fa-regular fa-star",
      "aria-hidden": "true",
      style: {
        color: active ? "var(--ion-color-primary)" : "var(--ion-color-medium)",
        fontSize: size
      }
    }));
  }

  /* ---------- shared chrome ---------- */
  function StatusBar({
    bg = "var(--surface-card)"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-default)",
        background: bg
      }
    }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-signal"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-wifi"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-battery-full"
    })));
  }
  function Frame({
    children,
    bg = "var(--surface-app)"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height: 844,
        display: "flex",
        flexDirection: "column",
        background: bg,
        fontFamily: "var(--font-body)",
        overflow: "hidden"
      }
    }, children);
  }
  function Sparkle({
    size = 18,
    color = "var(--ion-color-primary)"
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      style: {
        display: "block",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z",
      fill: color
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 2.5 L19.9 5.1 L22.5 6 L19.9 6.9 L19 9.5 L18.1 6.9 L15.5 6 L18.1 5.1 Z",
      fill: color,
      opacity: "0.75"
    }));
  }
  function SearchField({
    value,
    placeholder = "Zoek een klacht of onderwerp, bijv. keelpijn",
    focused = false,
    showClear = false
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        height: 52,
        borderRadius: 26,
        background: "var(--ion-color-white)",
        border: `${focused ? 2 : 1}px solid ${focused ? "var(--ion-color-primary)" : "var(--color-border)"}`,
        padding: "0 16px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-magnifying-glass",
      "aria-hidden": "true",
      style: {
        color: focused ? "var(--ion-color-primary)" : "var(--ion-color-medium)",
        fontSize: 17
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 16,
        color: value ? "var(--text-default)" : "var(--text-placeholder)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, value || placeholder, focused && !value && /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-block",
        width: 2,
        height: 20,
        background: "var(--ion-color-primary)",
        marginLeft: 1,
        verticalAlign: "-4px"
      }
    })), showClear && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-xmark",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 18
      }
    }));
  }
  function ThuisartsLogo({
    height = 22,
    style
  }) {
    return /*#__PURE__*/React.createElement("img", {
      src: "thuisarts-logo.png",
      alt: "Thuisarts",
      style: {
        height,
        width: "auto",
        display: "block",
        ...style
      }
    });
  }
  function Disclaimer({
    style
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
        padding: "0 4px",
        ...style
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-info",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 13,
        marginTop: 2,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, "Informatie ter voorlichting \u2014 geen vervanging van triage of je huisarts."));
  }
  function SourceLine({
    date = "Laatst aangepast 12 mrt 2026"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontWeight: "var(--weight-semibold)",
        color: "var(--brand-turquoise-shade)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-house-medical",
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), " Thuisarts.nl"), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, date));
  }
  const POPULAR = ["Keelpijn", "Hoofdpijn", "Verkoudheid", "Koorts bij kinderen", "Rugpijn", "Hoesten", "Oorpijn", "Slapeloosheid"];
  const THEMES = [{
    icon: "fa-solid fa-head-side-cough",
    label: "Verkoudheid & griep",
    n: 18
  }, {
    icon: "fa-solid fa-child-reaching",
    label: "Klachten bij kinderen",
    n: 32
  }, {
    icon: "fa-solid fa-heart-pulse",
    label: "Hart & bloeddruk",
    n: 24
  }, {
    icon: "fa-solid fa-bone",
    label: "Spieren & gewrichten",
    n: 21
  }];
  function Chip({
    children
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        minHeight: 40,
        padding: "8px 16px",
        borderRadius: 22,
        border: "1.5px solid var(--ion-color-primary)",
        background: "var(--ion-color-white)",
        color: "var(--ion-color-primary)",
        fontSize: 15,
        fontWeight: "var(--weight-medium)"
      }
    }, children);
  }

  /* iOS-achtig toetsenbord (mockup) */
  function Keyboard() {
    const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
    const kb = {
      background: "#d1d5db",
      padding: "8px 3px 10px",
      flex: "none",
      fontFamily: "var(--font-body)"
    };
    const rowStyle = {
      display: "flex",
      gap: 6,
      margin: "0 3px 11px"
    };
    const key = {
      flex: "1 1 0",
      height: 42,
      background: "#fff",
      borderRadius: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 19,
      color: "#111",
      boxShadow: "0 1px 0 rgba(0,0,0,0.3)"
    };
    const spec = {
      ...key,
      background: "#adb3bd",
      color: "#1a1a1a",
      fontSize: 15,
      flex: "1.3 1 0"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: kb
    }, /*#__PURE__*/React.createElement("div", {
      style: rowStyle
    }, rows[0].split("").map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: key
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...rowStyle,
        padding: "0 18px"
      }
    }, rows[1].split("").map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: key
    }, c))), /*#__PURE__*/React.createElement("div", {
      style: rowStyle
    }, /*#__PURE__*/React.createElement("span", {
      style: spec
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up"
    })), rows[2].split("").map(c => /*#__PURE__*/React.createElement("span", {
      key: c,
      style: key
    }, c)), /*#__PURE__*/React.createElement("span", {
      style: spec
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-delete-left"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        ...rowStyle,
        marginBottom: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        ...spec,
        fontSize: 14
      }
    }, "123"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...spec,
        flex: "0.9 1 0"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-face-smile"
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        ...key,
        flex: "4 1 0",
        fontSize: 15,
        color: "#555"
      }
    }, "spatie"), /*#__PURE__*/React.createElement("span", {
      style: {
        ...spec,
        flex: "1.8 1 0",
        background: "var(--ion-color-primary)",
        color: "#fff",
        fontSize: 15
      }
    }, "Zoek")));
  }
  const RECENT = ["Paracetamol dosering", "Koorts bij kinderen", "Hoofdpijn"];

  /* Gedeelde bovenkant: gedimde begroeting + actief Thuisarts-zoekveld */
  function HomeSearchShell({
    children,
    value,
    showClear
  }) {
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, {
      bg: "var(--surface-app)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        padding: "14px 16px 4px"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 22,
        lineHeight: "28px",
        margin: 0,
        opacity: 0.4
      }
    }, "Goedemiddag, Henk"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12,
        borderRadius: 14,
        background: "var(--surface-subtle)",
        border: "1px solid var(--ion-color-secondary-shade)",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement(ThuisartsLogo, {
      height: 22,
      style: {
        marginBottom: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(SearchField, {
      focused: true,
      value: value,
      showClear: showClear
    })), /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 15,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        whiteSpace: "nowrap",
        padding: 0
      }
    }, "Annuleren")))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        background: "var(--surface-card)"
      }
    }, children)), /*#__PURE__*/React.createElement(Keyboard, null));
  }

  /* Home — zoeken actief: suggestiepaneel onder het veld */
  function HomeSearchActiveScreen() {
    return /*#__PURE__*/React.createElement(HomeSearchShell, null, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "14px 16px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "0 2px 8px"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        color: "var(--text-secondary)",
        margin: 0
      }
    }, "Recent gezocht"), /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 13,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        padding: 0
      }
    }, "Wissen")), RECENT.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: r,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 2px",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.08)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-clock",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 15
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        fontSize: 16,
        color: "var(--text-default)"
      }
    }, r), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 13,
        transform: "rotate(45deg)"
      }
    }))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 14,
        textTransform: "uppercase",
        letterSpacing: "0.03em",
        color: "var(--text-secondary)",
        margin: "18px 2px 12px"
      }
    }, "Veelgezocht"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, POPULAR.slice(0, 5).map(p => /*#__PURE__*/React.createElement(Chip, {
      key: p
    }, p)))));
  }

  /* Home — tijdens typen: autocomplete onder het veld */
  function HomeSearchTypingScreen() {
    const suggestions = [{
      t: "Keelpijn",
      hint: "Onderwerp"
    }, {
      t: "Keelontsteking",
      hint: "Onderwerp"
    }, {
      t: "Keelpijn bij kinderen",
      hint: "Onderwerp"
    }, {
      t: "Keelpijn en koorts",
      hint: "Onderwerp"
    }];
    return /*#__PURE__*/React.createElement(HomeSearchShell, {
      value: "keelp",
      showClear: true
    }, /*#__PURE__*/React.createElement("div", null, suggestions.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "13px 18px",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.08)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-magnifying-glass",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 15,
        width: 18,
        textAlign: "center"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 16,
        color: "var(--text-default)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: "var(--weight-bold)"
      }
    }, "keelp"), s.t.slice(5)), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 13,
        transform: "rotate(45deg)"
      }
    })))));
  }
  function ScreenHeader({
    title,
    onBack = true,
    logo = false,
    right = null
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: 4,
        height: 56,
        padding: "0 8px",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)"
      }
    }, onBack && /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-left",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 18,
        padding: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    }, logo ? /*#__PURE__*/React.createElement(ThuisartsLogo, {
      height: 22
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38,
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
      }
    }, right));
  }

  /* Onderste navigatiebalk — v1 met Thuisarts-tab, v2 met Profiel-tab */
  function NavBar({
    variant = "v1"
  }) {
    const tabs = variant === "v2" ? [{
      id: "overzicht",
      label: "Overzicht",
      glyph: "house"
    }, {
      id: "chats",
      label: "Chats",
      glyph: "chat"
    }, {
      id: "dossier",
      label: "Dossier",
      glyph: "folder"
    }, {
      id: "profiel",
      label: "Profiel",
      glyph: "user"
    }] : [{
      id: "overzicht",
      label: "Overzicht",
      glyph: "house"
    }, {
      id: "chats",
      label: "Chats",
      glyph: "chat"
    }, {
      id: "dossier",
      label: "Dossier",
      glyph: "folder"
    }, THUISARTS_TAB];
    const active = variant === "v2" ? "overzicht" : "info";
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(GI.TabBar, {
      active: active,
      tabs: tabs,
      onChange: () => {}
    }));
  }

  /* Thuisarts-beeldmerk voor de tabbalk (via .ta-mark klasse in index.html) */
  const THUISARTS_TAB = {
    id: "info",
    label: "Thuisarts",
    icon: "ta-mark"
  };

  /* ============ 1d. Home — variant met app-header + wisselende begroeting ============ */
  const GREETINGS = ["Waar kunnen we je vandaag mee helpen, Henk?", "Goedemiddag Henk, waar kunnen we je mee helpen?", "Waar kunnen we je mee helpen, Henk?", "Hallo Henk, vertel gerust waar je mee zit.", "Waar kunnen we je mee verder helpen, Henk?", "Waar kunnen we je mee helpen, Henk?", "Hallo Henk, waar heb je vandaag hulp bij nodig?"];
  function AppHeader({
    notifications = 1
  }) {
    const btn = {
      width: 44,
      height: 44,
      flex: "none",
      border: "none",
      background: "transparent",
      color: "var(--text-default)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 56,
        padding: "0 8px",
        background: "var(--ion-color-white)",
        borderBottom: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Profiel",
      style: btn
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-circle-user",
      "aria-hidden": "true",
      style: {
        fontSize: 22
      }
    })), /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logos/spreekuur-wordmark.svg",
      alt: "Spreekuur.nl",
      style: {
        height: 20,
        width: "auto",
        display: "block"
      }
    }), /*#__PURE__*/React.createElement("button", {
      "aria-label": `Meldingen (${notifications})`,
      style: {
        ...btn,
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-bell",
      "aria-hidden": "true",
      style: {
        fontSize: 21
      }
    }), notifications > 0 && /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        top: 4,
        right: 4,
        minWidth: 18,
        height: 18,
        padding: "0 5px",
        borderRadius: 9,
        background: "var(--ion-color-danger)",
        color: "var(--ion-color-white)",
        fontSize: 11,
        fontWeight: "var(--weight-bold)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1
      }
    }, notifications)));
  }
  function HomeGreetingScreen({
    greetingIndex = null
  }) {
    const [greeting] = React.useState(() => greetingIndex === null ? GREETINGS[Math.floor(Math.random() * GREETINGS.length)] : GREETINGS[greetingIndex % GREETINGS.length]);
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(AppHeader, {
      notifications: 1
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 16px 0",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 20,
        lineHeight: "30px",
        margin: "0 0 10px",
        padding: "0 2px",
        textWrap: "pretty"
      }
    }, greeting), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 14,
        background: "var(--surface-subtle)",
        border: "1px solid var(--ion-color-secondary-shade)",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: 15
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        color: "var(--ion-color-primary)",
        whiteSpace: "nowrap"
      }
    }, "SAM")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 46,
        borderRadius: 23,
        background: "var(--ion-color-white)",
        border: "1px solid var(--color-border)",
        padding: "0 6px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 15,
        color: "var(--text-placeholder)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, "Stel hier je vraag of start een actie"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-primary)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true"
    })))), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        margin: "24px 0 12px"
      }
    }, "Direct regelen"), /*#__PURE__*/React.createElement(GI.List, null, /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-comment-dots",
      title: "Vraag stellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-capsules",
      title: "Medicijnen bestellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-calendar-days",
      title: "Afspraak maken",
      onClick: () => {}
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(GI.TabBar, {
      active: "overzicht",
      tabs: [{
        id: "overzicht",
        label: "Overzicht",
        glyph: "house"
      }, {
        id: "chats",
        label: "Chats",
        glyph: "chat"
      }, {
        id: "dossier",
        label: "Dossier",
        glyph: "folder"
      }, THUISARTS_TAB],
      onChange: () => {}
    })));
  }

  /* ============ 1e. Home — begroeting + SAM als één geheel (5 variaties) ============ */
  const UNIFIED_GREETING = "Waar kunnen we je mee helpen, Henk?";
  function SamAvatar({
    size = 32
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: size,
        height: size,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: Math.round(size * 0.5),
      color: "var(--ion-color-white)"
    }));
  }
  function SamInput({
    compact = false
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: compact ? 44 : 46,
        borderRadius: 23,
        background: "var(--ion-color-white)",
        border: "1px solid var(--color-border)",
        padding: "0 6px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 15,
        color: "var(--text-placeholder)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, "Stel hier je vraag of start een actie"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-primary)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true"
    })));
  }
  function SamLabel() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: 15
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        color: "var(--ion-color-primary)",
        whiteSpace: "nowrap"
      }
    }, "SAM"));
  }
  function HomeUnifiedScreen({
    layout = 1
  }) {
    const panel = {
      borderRadius: 14,
      background: "var(--surface-subtle)",
      border: "1px solid var(--ion-color-secondary-shade)"
    };
    const heading = {
      fontSize: 22,
      lineHeight: "29px",
      margin: 0,
      textWrap: "pretty"
    };
    let block;
    if (layout === 1) {
      /* A — alles in één kaart: label, begroeting, invoerveld */
      block = /*#__PURE__*/React.createElement("div", {
        style: {
          ...panel,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(SamLabel, null), /*#__PURE__*/React.createElement("h1", {
        style: heading
      }, UNIFIED_GREETING), /*#__PURE__*/React.createElement(SamInput, null));
    } else if (layout === 2) {
      /* B — chatbericht: avatar naast de begroeting, invoerveld eronder */
      block = /*#__PURE__*/React.createElement("div", {
        style: {
          ...panel,
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 14
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          gap: 12,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement(SamAvatar, {
        size: 36
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          flex: 1,
          minWidth: 0
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 12,
          fontWeight: "var(--weight-semibold)",
          letterSpacing: "0.03em",
          textTransform: "uppercase",
          color: "var(--ion-color-primary)",
          marginBottom: 3
        }
      }, "SAM"), /*#__PURE__*/React.createElement("h1", {
        style: heading
      }, UNIFIED_GREETING))), /*#__PURE__*/React.createElement(SamInput, null));
    } else if (layout === 3) {
      /* C — kop met scheidslijn: SAM-rij bovenin, begroeting en veld eronder */
      block = /*#__PURE__*/React.createElement("div", {
        style: {
          ...panel,
          overflow: "hidden"
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 16px",
          background: "var(--ion-color-white)",
          borderBottom: "1px solid var(--ion-color-secondary-shade)"
        }
      }, /*#__PURE__*/React.createElement(SamAvatar, {
        size: 28
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          flexDirection: "column"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 14.5,
          fontWeight: "var(--weight-semibold)",
          color: "var(--text-default)",
          lineHeight: "18px"
        }
      }, "SAM"), /*#__PURE__*/React.createElement("span", {
        style: {
          fontSize: 12.5,
          color: "var(--text-secondary)",
          lineHeight: "16px"
        }
      }, "Je digitale assistent"))), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("h1", {
        style: heading
      }, UNIFIED_GREETING), /*#__PURE__*/React.createElement(SamInput, null)));
    } else if (layout === 4) {
      /* D — full-bleed paneel dat aansluit op de header */
      block = /*#__PURE__*/React.createElement("div", {
        style: {
          margin: "-16px -16px 0",
          padding: "18px 16px 20px",
          background: "var(--surface-subtle)",
          borderBottom: "1px solid var(--ion-color-secondary-shade)",
          display: "flex",
          flexDirection: "column",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement(SamLabel, null), /*#__PURE__*/React.createElement("h1", {
        style: {
          ...heading,
          fontSize: 24,
          lineHeight: "31px"
        }
      }, UNIFIED_GREETING), /*#__PURE__*/React.createElement(SamInput, null));
    } else {
      /* E — begroeting boven, kaart met tuitje eraan vast */
      block = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
        style: {
          ...heading,
          fontSize: 21,
          lineHeight: "28px",
          padding: "0 2px",
          marginBottom: 8
        }
      }, UNIFIED_GREETING), /*#__PURE__*/React.createElement("div", {
        style: {
          position: "relative",
          ...panel,
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 12
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: "absolute",
          top: -7,
          left: 22,
          width: 12,
          height: 12,
          background: "var(--surface-subtle)",
          borderLeft: "1px solid var(--ion-color-secondary-shade)",
          borderTop: "1px solid var(--ion-color-secondary-shade)",
          transform: "rotate(45deg)"
        }
      }), /*#__PURE__*/React.createElement(SamLabel, null), /*#__PURE__*/React.createElement(SamInput, null)));
    }
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(AppHeader, {
      notifications: 1
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 16px 0",
        overflow: "hidden"
      }
    }, block, /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        margin: "24px 0 12px"
      }
    }, "Direct regelen"), /*#__PURE__*/React.createElement(GI.List, null, /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-comment-dots",
      title: "Vraag stellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-capsules",
      title: "Medicijnen bestellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-calendar-days",
      title: "Afspraak maken",
      onClick: () => {}
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(GI.TabBar, {
      active: "overzicht",
      tabs: [{
        id: "overzicht",
        label: "Overzicht",
        glyph: "house"
      }, {
        id: "chats",
        label: "Chats",
        glyph: "chat"
      }, {
        id: "dossier",
        label: "Dossier",
        glyph: "folder"
      }, THUISARTS_TAB],
      onChange: () => {}
    })));
  }

  /* ============ 1. Home — subtiele zoekingang ============ */
  function HomeEntryScreen() {
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, {
      bg: "var(--surface-app)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 16px 0",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 30,
        lineHeight: "38px",
        margin: 0
      }
    }, "Goedemiddag,", /*#__PURE__*/React.createElement("br", null), "Henk"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Meldingen",
      style: {
        width: 44,
        height: 44,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 22,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-bell",
      "aria-hidden": "true"
    })), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Profiel",
      style: {
        width: 40,
        height: 40,
        flex: "none",
        border: "none",
        borderRadius: "50%",
        background: "var(--ion-color-light-shade)",
        color: "var(--ion-color-medium)",
        fontSize: 18,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-user",
      "aria-hidden": "true"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        borderRadius: 14,
        background: "var(--surface-subtle)",
        border: "1px solid var(--ion-color-secondary-shade)",
        padding: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 7,
        marginBottom: 3
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: 15
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        color: "var(--ion-color-primary)",
        whiteSpace: "nowrap"
      }
    }, "Spreekuur.nl Agent")), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 19,
        lineHeight: "25px",
        margin: "0 0 10px"
      }
    }, "Waarmee kunnen we je helpen?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        height: 46,
        borderRadius: 23,
        background: "var(--ion-color-white)",
        border: "1px solid var(--color-border)",
        padding: "0 6px 0 16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0,
        fontSize: 15,
        color: "var(--text-placeholder)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, "Stel hier je vraag of start een actie"), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        flex: "none",
        borderRadius: "50%",
        background: "var(--ion-color-primary)",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 14
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true"
    })))), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        margin: "24px 0 12px"
      }
    }, "Direct regelen"), /*#__PURE__*/React.createElement(GI.List, null, /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-comment-dots",
      title: "Vraag stellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-capsules",
      title: "Medicijnen bestellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-calendar-days",
      title: "Afspraak maken",
      onClick: () => {}
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(GI.TabBar, {
      active: "overzicht",
      tabs: [{
        id: "overzicht",
        label: "Overzicht",
        glyph: "house"
      }, {
        id: "chats",
        label: "Chats",
        glyph: "chat"
      }, {
        id: "dossier",
        label: "Dossier",
        glyph: "folder"
      }, THUISARTS_TAB],
      onChange: () => {}
    })));
  }

  /* ============ 1b. Home — Thuisarts-zoekveld i.p.v. agent ============ */
  function HomeThuisartsScreen() {
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, {
      bg: "var(--surface-app)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 16px 0",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 30,
        lineHeight: "38px",
        margin: 0
      }
    }, "Goedemiddag,", /*#__PURE__*/React.createElement("br", null), "Henk"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 4,
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement("button", {
      "aria-label": "Meldingen",
      style: {
        width: 44,
        height: 44,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 22,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-bell",
      "aria-hidden": "true"
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        borderRadius: 14,
        background: "var(--surface-subtle)",
        border: "1px solid var(--ion-color-secondary-shade)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(ThuisartsLogo, {
      height: 26
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11.5,
        fontWeight: "var(--weight-semibold)",
        letterSpacing: "0.03em",
        textTransform: "uppercase",
        color: "var(--text-secondary)"
      }
    }, "Betrouwbare info")), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 19,
        lineHeight: "25px",
        margin: "0 0 10px"
      }
    }, "Zoek betrouwbare gezondheidsinformatie"), /*#__PURE__*/React.createElement(SearchField, {
      placeholder: "Zoek een klacht of onderwerp, bijv. keelpijn"
    }), /*#__PURE__*/React.createElement(Disclaimer, {
      style: {
        margin: "10px 2px 0"
      }
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        margin: "24px 0 12px"
      }
    }, "Direct regelen"), /*#__PURE__*/React.createElement(GI.List, null, /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-comment-dots",
      title: "Vraag stellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-capsules",
      title: "Medicijnen bestellen",
      onClick: () => {}
    }), /*#__PURE__*/React.createElement(GI.ListItem, {
      icon: "fa-solid fa-calendar-days",
      title: "Afspraak maken",
      onClick: () => {}
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement(GI.TabBar, {
      active: "overzicht",
      tabs: [{
        id: "overzicht",
        label: "Overzicht",
        glyph: "house"
      }, {
        id: "chats",
        label: "Chats",
        glyph: "chat"
      }, {
        id: "dossier",
        label: "Dossier",
        glyph: "folder"
      }, {
        id: "profiel",
        label: "Profiel",
        glyph: "user"
      }],
      onChange: () => {}
    })));
  }

  /* ============ 2. Zoekscherm — startstaat ============ */
  const ARTICLE_SUMMARY = {
    "Keelpijn": "Gaat meestal vanzelf over binnen 7 dagen.",
    "Keelpijn bij kinderen": "Vaak bij verkoudheid en meestal onschuldig.",
    "Keelontsteking": "Meestal een virus — antibiotica helpen dan niet.",
    "Koorts bij volwassenen": "Een afweerreactie, vaak bij een onschuldige infectie."
  };
  function SavedList() {
    const [saved, toggle] = useSaved();
    if (saved.length === 0) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 20,
          borderRadius: 12,
          background: "var(--surface-subtle)",
          padding: "22px 18px",
          display: "flex",
          gap: 12,
          alignItems: "flex-start"
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-regular fa-star",
        "aria-hidden": "true",
        style: {
          color: "var(--ion-color-medium)",
          fontSize: 18,
          marginTop: 2
        }
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          fontWeight: "var(--weight-semibold)",
          fontSize: 15.5,
          color: "var(--text-default)"
        }
      }, "Nog geen opgeslagen artikelen"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: 14.5,
          lineHeight: "20px",
          color: "var(--text-secondary)"
        }
      }, "Tik op de ster bij een artikel om het hier te bewaren.")));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: "20px 0 4px"
      }
    }, "Opgeslagen artikelen"), saved.map((title, i) => /*#__PURE__*/React.createElement("div", {
      key: title,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        padding: "14px 0",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.10)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)",
        lineHeight: "22px"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        lineHeight: "19px",
        color: "var(--text-secondary)",
        margin: "3px 0 6px"
      }
    }, ARTICLE_SUMMARY[title] || ""), /*#__PURE__*/React.createElement(SourceLine, null)), /*#__PURE__*/React.createElement(StarButton, {
      active: true,
      onClick: () => toggle(title),
      size: 19
    }))));
  }
  function SearchStartScreen({
    logo = false,
    suggestions = true,
    saved = false,
    nav = null
  }) {
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenHeader, {
      title: "Thuisarts",
      logo: logo
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 16px 0",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(SearchField, {
      focused: true
    }), /*#__PURE__*/React.createElement(Disclaimer, {
      style: {
        margin: "12px 0 4px"
      }
    }), saved && /*#__PURE__*/React.createElement(SavedList, null), suggestions && !saved && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: "20px 0 12px"
      }
    }, "Veelgezocht"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8
      }
    }, POPULAR.slice(0, 6).map(p => /*#__PURE__*/React.createElement(Chip, {
      key: p
    }, p))), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 18,
        margin: "24px 0 8px"
      }
    }, "Bekijk per thema"), /*#__PURE__*/React.createElement(GI.List, null, THEMES.map(t => /*#__PURE__*/React.createElement(GI.ListItem, {
      key: t.label,
      icon: t.icon,
      title: t.label,
      note: `${t.n} artikelen`,
      onClick: () => {}
    }))))), nav && /*#__PURE__*/React.createElement(NavBar, {
      variant: nav
    }));
  }

  /* ============ 3. Tijdens typen — autocomplete ============ */
  function SearchTypingScreen({
    logo = false,
    nav = null
  }) {
    const suggestions = [{
      t: "Keelpijn",
      hint: "Onderwerp"
    }, {
      t: "Keelontsteking",
      hint: "→ Keelpijn",
      syn: true
    }, {
      t: "Keelpijn bij kinderen",
      hint: "Onderwerp"
    }, {
      t: "Keelpijn en koorts",
      hint: "Onderwerp"
    }];
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenHeader, {
      title: "Thuisarts",
      logo: logo
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        padding: "16px 16px 8px"
      }
    }, /*#__PURE__*/React.createElement(SearchField, {
      value: "keelp",
      focused: true,
      showClear: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        padding: "0 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderRadius: 14,
        overflow: "hidden"
      }
    }, suggestions.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        padding: "13px 18px",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.08)" : "none"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: s.syn ? "fa-solid fa-arrow-right-arrow-left" : "fa-solid fa-magnifying-glass",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 15,
        width: 18,
        textAlign: "center"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: "var(--text-default)"
      }
    }, /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: "var(--weight-bold)"
      }
    }, "keelp"), s.t.toLowerCase().startsWith("keelp") ? s.t.slice(5) : "", !s.t.toLowerCase().startsWith("keelp") && s.t), s.syn && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 8,
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, s.hint)), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-up",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-medium)",
        fontSize: 13,
        transform: "rotate(45deg)"
      }
    }))))), nav && /*#__PURE__*/React.createElement(NavBar, {
      variant: nav
    }));
  }

  /* ============ 4. Resultaten ============ */
  const RESULTS = [{
    title: "Keelpijn",
    summary: "Keelpijn gaat meestal vanzelf over binnen 7 dagen. Lees wat je zelf kunt doen en wanneer je contact opneemt."
  }, {
    title: "Keelpijn bij kinderen",
    summary: "Kinderen hebben vaak keelpijn bij een verkoudheid. Meestal is het onschuldig en hoeft u niets te doen."
  }, {
    title: "Keelontsteking",
    summary: "Een keelontsteking wordt meestal veroorzaakt door een virus. Antibiotica helpen dan niet."
  }, {
    title: "Koorts bij volwassenen",
    summary: "Koorts is een afweerreactie van je lichaam. Vaak hoort er een onschuldige infectie bij."
  }];
  function ResultsScreen({
    logo = false,
    nav = null,
    saveable = false
  }) {
    const [saved, toggle] = useSaved();
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenHeader, {
      title: "Thuisarts",
      logo: logo
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        padding: "16px 16px 10px"
      }
    }, /*#__PURE__*/React.createElement(SearchField, {
      value: "keelpijn",
      showClear: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        padding: "0 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14,
        color: "var(--text-secondary)",
        margin: "2px 2px 8px"
      }
    }, "12 artikelen gevonden"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderRadius: 14,
        padding: "0 16px"
      }
    }, RESULTS.map((r, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        padding: "16px 0",
        borderTop: i > 0 ? "1px solid rgba(71,80,85,0.10)" : "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("h3", {
      style: {
        fontSize: 19,
        lineHeight: "25px",
        margin: 0,
        flex: 1
      }
    }, r.title), saveable ? /*#__PURE__*/React.createElement(StarButton, {
      active: saved.includes(r.title),
      onClick: () => toggle(r.title),
      size: 19
    }) : /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-right",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 15,
        marginTop: 5
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "5px 0 9px",
        fontSize: 15,
        lineHeight: "21px",
        color: "var(--text-secondary)"
      }
    }, r.summary), /*#__PURE__*/React.createElement(SourceLine, null))))), nav && /*#__PURE__*/React.createElement(NavBar, {
      variant: nav
    }));
  }

  /* ============ 5. Geen resultaten ============ */
  function NoResultsScreen({
    logo = false
  }) {
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenHeader, {
      title: "Thuisarts",
      logo: logo
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        padding: "16px 16px 10px"
      }
    }, /*#__PURE__*/React.createElement(SearchField, {
      value: "kelpajn",
      showClear: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        padding: "8px 24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 110,
        height: 110,
        marginTop: 12
      }
    }, window.SUIllustratie1 ? /*#__PURE__*/React.createElement(window.SUIllustratie1, {
      type: "zoeken",
      style: {
        width: 110
      }
    }) : null), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 24,
        margin: "12px 0 6px"
      }
    }, "Geen resultaten gevonden"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-secondary)"
      }
    }, "Bedoelde je ", /*#__PURE__*/React.createElement("button", {
      style: {
        border: "none",
        background: "transparent",
        padding: 0,
        color: "var(--ion-color-primary)",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer"
      }
    }, "keelpijn"), "? Probeer het anders te formuleren of zoek op een ander woord."), /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        marginTop: 22,
        borderRadius: 12,
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        padding: 16,
        display: "flex",
        gap: 12,
        alignItems: "flex-start",
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-comment-dots",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 18,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 15.5,
        color: "var(--text-default)"
      }
    }, "Kom je er niet uit?"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        lineHeight: "20px",
        color: "var(--text-secondary)"
      }
    }, "Stel je vraag direct aan je eigen praktijk.")))));
  }

  /* ============ 6. Artikelweergave ============ */
  function ArticleScreen({
    logo = false,
    nav = null,
    saveable = false
  }) {
    const [saved, toggle] = useSaved();
    const title = "Keelpijn";
    return /*#__PURE__*/React.createElement(Frame, null, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ScreenHeader, {
      title: logo ? "" : title,
      logo: logo,
      right: saveable ? /*#__PURE__*/React.createElement(StarButton, {
        active: saved.includes(title),
        onClick: () => toggle(title),
        size: 20
      }) : null
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        padding: "16px 16px 0"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        borderRadius: 14,
        padding: "20px 18px",
        height: "100%",
        boxSizing: "border-box",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 30,
        lineHeight: "38px",
        margin: 0
      }
    }, "Keelpijn"), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: "10px 0 14px"
      }
    }, /*#__PURE__*/React.createElement(SourceLine, null)), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "0 0 16px",
        fontSize: 16.5,
        lineHeight: "25px",
        color: "var(--text-default)"
      }
    }, "Keelpijn komt vaak voor en gaat meestal vanzelf over binnen 7 dagen. Het hoort meestal bij een verkoudheid of een lichte infectie."), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 21,
        margin: "0 0 8px"
      }
    }, "Wat kun je zelf doen?"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        marginBottom: 18
      }
    }, ["Drink regelmatig kleine slokjes water.", "Neem zo nodig paracetamol tegen de pijn.", "Zuig op een keeltablet of snoepje."].map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-check",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-success)",
        fontSize: 16,
        marginTop: 3
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, s)))), /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 12,
        background: "var(--ion-color-warning-lighter)",
        padding: "12px 14px",
        display: "flex",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-exclamation",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-warning-shade)",
        fontSize: 16,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        lineHeight: "21px",
        color: "var(--text-default)"
      }
    }, "Neem contact op met je huisarts als je niet meer kunt slikken of benauwd wordt.")))), nav && /*#__PURE__*/React.createElement(NavBar, {
      variant: nav
    }));
  }

  /* ============ Variant 3 — Vraag stellen → verwachting + Thuisarts-artikelen ============ */

  /* Modale wizard-chrome: header "Vraag stellen" + X, voortgangsbalk, Terug/Volgende */
  function WizardShell({
    children,
    progress = 0.2,
    nextActive = true
  }) {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "var(--surface-app)"
    }, /*#__PURE__*/React.createElement(StatusBar, {
      bg: "var(--surface-card)"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        height: 56,
        display: "flex",
        alignItems: "center",
        padding: "0 10px",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-bold)",
        fontSize: 18,
        color: "var(--text-default)"
      }
    }, "Vraag stellen"), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Sluiten",
      style: {
        width: 40,
        height: 40,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 20,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden"
      }
    }, children), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        padding: "14px 16px 16px",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        borderRadius: 3,
        background: "var(--ion-color-light-shade)",
        overflow: "hidden",
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${progress * 100}%`,
        height: "100%",
        background: "var(--ion-color-primary)",
        borderRadius: 3
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("button", {
      style: {
        flex: 1,
        height: 54,
        borderRadius: 16,
        border: "1.5px solid var(--color-border)",
        background: "transparent",
        color: "var(--text-default)",
        fontSize: 16.5,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-left",
      "aria-hidden": "true",
      style: {
        fontSize: 14
      }
    }), " Terug"), /*#__PURE__*/React.createElement("button", {
      style: {
        flex: 1,
        height: 54,
        borderRadius: 16,
        border: "none",
        background: nextActive ? "var(--ion-color-primary)" : "#a7c1be",
        color: "#fff",
        fontSize: 16.5,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        fontFamily: "var(--font-body)"
      }
    }, "Volgende ", /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-arrow-right",
      "aria-hidden": "true",
      style: {
        fontSize: 14
      }
    })))));
  }
  function Thumb({
    icon,
    size = 56
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        flex: "none",
        borderRadius: 12,
        background: "var(--surface-subtle)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--brand-turquoise-shade)",
        fontSize: Math.round(size * 0.42)
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true"
    }));
  }
  function RadioDot({
    checked
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        width: 24,
        height: 24,
        flex: "none",
        borderRadius: "50%",
        border: `2px solid ${checked ? "var(--ion-color-primary)" : "var(--color-border)"}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, checked && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "var(--ion-color-primary)"
      }
    }));
  }
  const KLACHTEN = [{
    icon: "fa-solid fa-hand",
    label: "Arm- en handklachten"
  }, {
    icon: "fa-solid fa-person-walking",
    label: "Been, knie, heup en voet"
  }, {
    icon: "fa-solid fa-droplet",
    label: "Blaasontsteking"
  }, {
    icon: "fa-solid fa-fire",
    label: "Brandwonden"
  }, {
    icon: "fa-solid fa-bowl-food",
    label: "Buikklachten"
  }, {
    icon: "fa-solid fa-syringe",
    label: "Diabetesklachten"
  }, {
    icon: "fa-solid fa-brain",
    label: "Duizelig"
  }, {
    icon: "fa-solid fa-heart-pulse",
    label: "Hartkloppingen"
  }];

  /* Klachtgebieden hard gekoppeld aan een Thuisarts-artikel + "In het kort" */
  const KLACHT_INFO = {
    "Brandwonden": {
      article: "Ik heb me verbrand. Wat moet ik doen?",
      kort: [{
        t: "Koel direct 10–20 min met lauw, zacht stromend water."
      }, {
        t: "Haal kleren, sieraden of een luier van de huid af."
      }, {
        t: "Koel alleen de wond — niet je hele lichaam."
      }, {
        b: "Bel 112",
        t: " bij een heel grote wond of als je benauwd wordt."
      }]
    },
    "Buikklachten": {
      article: "Ik heb buikpijn. Wat kan ik doen?",
      kort: [{
        t: "Buikpijn gaat vaak vanzelf over binnen enkele dagen."
      }, {
        t: "Drink genoeg en eet rustig, kleine beetjes."
      }, {
        b: "Bel de huisarts",
        t: " bij hevige of aanhoudende pijn."
      }]
    },
    "Hartkloppingen": {
      article: "Ik heb hartkloppingen. Wat moet ik doen?",
      kort: [{
        t: "Kortdurende hartkloppingen zijn meestal onschuldig."
      }, {
        t: "Rust uit en probeer rustig te ademen."
      }, {
        b: "Bel 112",
        t: " bij pijn op de borst of flauwvallen."
      }]
    }
  };

  /* 2c — Waar gaat je vraag over? (klachtgebied kiezen) */
  function AskAreaScreen() {
    const chosen = "Brandwonden";
    return /*#__PURE__*/React.createElement(WizardShell, {
      progress: 0.2,
      nextActive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "18px 16px 0"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 27,
        lineHeight: "34px",
        margin: "0 0 14px"
      }
    }, "Waar gaat je vraag over?"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        height: 54,
        borderRadius: 14,
        background: "var(--ion-color-white)",
        border: "1.5px solid var(--color-border)",
        padding: "0 18px",
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16,
        color: "var(--text-placeholder)"
      }
    }, "Zoek je klacht")), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        background: "var(--ion-color-white)",
        borderRadius: 14
      }
    }, KLACHTEN.map((k, i) => {
      const sel = k.label === chosen;
      return /*#__PURE__*/React.createElement("div", {
        key: k.label,
        style: {
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "12px 16px",
          borderTop: i > 0 ? "1px solid var(--color-divider)" : "none",
          background: sel ? "var(--surface-subtle)" : "transparent"
        }
      }, /*#__PURE__*/React.createElement(RadioDot, {
        checked: sel
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1,
          fontSize: 17,
          fontWeight: "var(--weight-semibold)",
          color: "var(--text-default)"
        }
      }, k.label), /*#__PURE__*/React.createElement(Thumb, {
        icon: k.icon,
        size: 52
      }));
    }))));
  }

  /* 3c — Binnen 5 minuten weet jij hoe we je gaan helpen (+ Thuisarts "In het kort") */
  function ExpectScreen() {
    const chosen = "Brandwonden";
    const info = KLACHT_INFO[chosen];
    const steps = ["Je krijgt vragen over jouw klacht — en je kunt een foto insturen.", "Wij kijken hoe dringend het is.", "Je wordt digitaal geholpen — soms krijg je alsnog een afspraak."];
    return /*#__PURE__*/React.createElement(WizardShell, {
      progress: 0.45,
      nextActive: true
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        overflow: "hidden",
        padding: "14px 16px 0"
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 24,
        lineHeight: "30px",
        margin: "0 0 8px"
      }
    }, "Binnen 5 minuten weet jij hoe we je gaan helpen"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        background: "var(--ion-color-white)",
        borderRadius: 14,
        padding: 12,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 17,
        fontWeight: "var(--weight-bold)",
        color: "var(--text-default)"
      }
    }, "Jouw klacht"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        color: "var(--text-secondary)",
        marginTop: 2
      }
    }, chosen, " \xB7 Volwassene")), /*#__PURE__*/React.createElement(Thumb, {
      icon: "fa-solid fa-fire",
      size: 54
    })), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 17,
        margin: "0 0 8px"
      }
    }, "Hoe werkt het?"), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--ion-color-white)",
        borderRadius: 14,
        padding: "11px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginBottom: 12
      }
    }, steps.map((st, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        flex: "none",
        borderRadius: "50%",
        background: "var(--text-default)",
        color: "#fff",
        fontSize: 13,
        fontWeight: "var(--weight-bold)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, i + 1), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)",
        lineHeight: "19px"
      }
    }, st)))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(ThuisartsLogo, {
      height: 22
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        color: "var(--text-secondary)"
      }
    }, "bij jouw klacht")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        fontWeight: "var(--weight-bold)",
        color: "var(--brand-turquoise-shade)",
        textDecoration: "underline",
        textUnderlineOffset: 3,
        marginBottom: 8,
        lineHeight: "21px"
      }
    }, info.article), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "#d8f26f",
        borderRadius: 16,
        padding: "13px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-list-ul",
      "aria-hidden": "true",
      style: {
        fontSize: 17,
        color: "var(--text-default)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18,
        fontWeight: "var(--weight-bold)",
        color: "var(--text-default)"
      }
    }, "In het kort")), /*#__PURE__*/React.createElement("ul", {
      style: {
        margin: 0,
        paddingLeft: 20,
        display: "flex",
        flexDirection: "column",
        gap: 6
      }
    }, info.kort.map((k, i) => /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        fontSize: 15,
        lineHeight: "21px",
        color: "var(--text-default)"
      }
    }, k.b && /*#__PURE__*/React.createElement("strong", {
      style: {
        fontWeight: "var(--weight-bold)"
      }
    }, k.b), k.t))))));
  }
  window.GIScreens = {
    HomeUnifiedScreen,
    HomeGreetingScreen,
    HomeEntryScreen,
    HomeThuisartsScreen,
    HomeSearchActiveScreen,
    HomeSearchTypingScreen,
    SearchStartScreen,
    SearchTypingScreen,
    ResultsScreen,
    NoResultsScreen,
    ArticleScreen,
    AskAreaScreen,
    ExpectScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/gezondheidsinformatie/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/app.jsx
try { (() => {
/* Spreekuur — Patient app shell: phone frame, login gate, tab nav, sub-screens. */

const DS = window.SpreekuurDesignSystem_5ed928;
function PhoneFrame({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      padding: 32,
      minHeight: "100vh",
      background: "var(--brand-turquoise-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 390,
      height: 800,
      position: "relative",
      background: "var(--surface-card)",
      borderRadius: 44,
      border: "10px solid #0c1416",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 24px",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-default)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "9:41"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-signal"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-wifi"
  }), /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-battery-full"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translateX(-50%)",
      width: 130,
      height: 26,
      background: "#0c1416",
      borderRadius: "0 0 16px 16px"
    }
  }), children));
}
const TABS = [{
  id: "overzicht",
  label: "Overzicht",
  glyph: "house"
}, {
  id: "chats",
  label: "Chats",
  glyph: "chat"
}, {
  id: "dossier",
  label: "Dossier",
  glyph: "folder"
}, {
  id: "profiel",
  label: "Profiel",
  glyph: "user"
}];
function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [tab, setTab] = React.useState("overzicht");
  const [stack, setStack] = React.useState([]); // sub-screens above the tab
  const [wizard, setWizard] = React.useState(false);
  const push = screen => setStack(s => [...s, screen]);
  const pop = () => setStack(s => s.slice(0, -1));
  if (!loggedIn) {
    return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: 44,
        left: 0,
        right: 0,
        bottom: 0
      }
    }, /*#__PURE__*/React.createElement(window.LoginScreen, {
      onLogin: () => setLoggedIn(true)
    })));
  }

  // Determine current sub-screen (top of stack), else the tab root
  const top = stack[stack.length - 1];
  let header = null,
    body = null;
  if (top && top.type === "afspraken") {
    header = /*#__PURE__*/React.createElement(DS.Header, {
      title: "Afspraken",
      onBack: pop,
      actionIcon: "fa-solid fa-plus",
      onAction: () => {}
    });
    body = /*#__PURE__*/React.createElement(window.AfsprakenScreen, {
      onOpenDetails: a => push({
        type: "details",
        a
      }),
      onOpenAfspraak: () => {}
    });
  } else if (top && top.type === "details") {
    header = /*#__PURE__*/React.createElement(DS.Header, {
      title: "Afspraak details",
      onBack: pop
    });
    body = /*#__PURE__*/React.createElement(window.AfspraakDetails, {
      afspraak: top.a
    });
  } else {
    // tab roots
    if (tab === "overzicht") {
      body = /*#__PURE__*/React.createElement(window.HomeScreen, {
        onOpenDossier: () => setWizard(true),
        onOpenAfspraak: () => {
          setTab("dossier");
          push({
            type: "afspraken"
          });
        },
        onOpenChat: () => setTab("chats")
      });
    } else if (tab === "chats") {
      header = /*#__PURE__*/React.createElement(DS.Header, {
        title: "Chats"
      });
      body = /*#__PURE__*/React.createElement(window.ChatsScreen, null);
    } else if (tab === "dossier") {
      header = /*#__PURE__*/React.createElement(DS.Header, {
        title: "Dossier"
      });
      body = /*#__PURE__*/React.createElement(window.DossierScreen, {
        onOpenAfspraken: () => push({
          type: "afspraken"
        })
      });
    } else {
      header = /*#__PURE__*/React.createElement(DS.Header, {
        title: "Profiel"
      });
      body = /*#__PURE__*/React.createElement(window.ProfielScreen, {
        onLogout: () => {
          setLoggedIn(false);
          setTab("overzicht");
          setStack([]);
        }
      });
    }
  }
  const switchTab = id => {
    setStack([]);
    setTab(id);
  };
  return /*#__PURE__*/React.createElement(PhoneFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 44,
      left: 0,
      right: 0,
      bottom: 60,
      display: "flex",
      flexDirection: "column"
    }
  }, header, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, body)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(DS.TabBar, {
    tabs: TABS,
    active: tab,
    onChange: switchTab
  })), wizard && /*#__PURE__*/React.createElement(window.DossierWizard, {
    onClose: () => setWizard(false)
  }));
}
window.__suRoot = window.__suRoot || ReactDOM.createRoot(document.getElementById("root"));
window.__suRoot.render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/login.jsx
try { (() => {
/* Spreekuur — Login (DigiD) screen, matching the real entry screen. */

const LG = window.SpreekuurDesignSystem_5ed928;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-app)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto",
      padding: "48px 28px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 300,
      height: 150,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Dots, null), /*#__PURE__*/React.createElement(Avatar, {
    style: {
      left: 8,
      top: 28
    },
    icon: "fa-solid fa-person-dress"
  }), /*#__PURE__*/React.createElement(Avatar, {
    style: {
      right: 8,
      top: 40
    },
    icon: "fa-solid fa-user"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      top: "50%",
      transform: "translate(-50%,-50%)",
      width: 96,
      height: 96,
      borderRadius: "50%",
      background: "#fff",
      border: "1px solid var(--color-divider)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/spreekuur-app-icon.png",
    alt: "Spreekuur",
    style: {
      width: 46,
      height: 46,
      borderRadius: 10
    }
  })), /*#__PURE__*/React.createElement(Arrow, {
    style: {
      left: 78,
      top: 24
    }
  }), /*#__PURE__*/React.createElement(Arrow, {
    style: {
      right: 70,
      bottom: 18,
      transform: "scaleX(-1) rotate(20deg)"
    }
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      lineHeight: "42px",
      textAlign: "center",
      margin: "8px 0 16px"
    }
  }, "Regel jouw zorg digitaal"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      fontSize: 17,
      color: "var(--text-default)"
    }
  }, "Gemeente Zeeland"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: "var(--text-secondary)",
      marginBottom: 16
    }
  }, "Via Spreekuur.nl"), /*#__PURE__*/React.createElement("a", {
    onClick: e => e.preventDefault(),
    href: "#",
    style: {
      color: "var(--ion-color-primary)",
      fontSize: 17,
      fontWeight: "var(--weight-medium)"
    }
  }, "Wijzig inlog organisatie")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 20px 12px"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLogin,
    style: {
      width: "100%",
      height: 64,
      border: "none",
      borderRadius: "var(--radius-md)",
      background: "var(--ion-color-digid)",
      color: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "#1a1a1a",
      borderRadius: 5,
      padding: "5px 7px",
      fontSize: 14,
      fontWeight: 800,
      letterSpacing: "-0.02em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#fff"
    }
  }, "Digi"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ion-color-digid)"
    }
  }, "D")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      fontWeight: "var(--weight-semibold)"
    }
  }, "Inloggen met DigiD")), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      color: "var(--text-secondary)",
      fontSize: 15,
      margin: "12px 0 0"
    }
  }, "Gebruik altijd jouw eigen DigiD")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      borderTop: "1px solid var(--color-divider)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(FooterBtn, {
    icon: "fa-solid fa-globe",
    label: "Switch to English"
  }), /*#__PURE__*/React.createElement(FooterBtn, {
    icon: "fa-solid fa-life-ring",
    label: "Ik wil hulp",
    align: "flex-end"
  })));
}
function Avatar({
  style,
  icon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--ion-color-light-shade)",
      color: "var(--ion-color-medium)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 26,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
function Arrow({
  style
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: "46",
    height: "34",
    viewBox: "0 0 46 34",
    "aria-hidden": "true",
    style: {
      position: "absolute",
      color: "var(--brand-turquoise)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 6 C 22 0, 40 6, 42 26",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M42 26 L 34 20 M42 26 L 44 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Dots() {
  const dots = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 9; c++) dots.push([c * 13 + 90, r * 13 + 30]);
  return /*#__PURE__*/React.createElement("svg", {
    width: "300",
    height: "150",
    style: {
      position: "absolute",
      inset: 0
    },
    "aria-hidden": "true"
  }, dots.map(([x, y], i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x,
    cy: y,
    r: "1.4",
    fill: "var(--color-divider)"
  })));
}
function FooterBtn({
  icon,
  label,
  align = "flex-start"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: align,
      gap: 8,
      padding: "16px 20px",
      color: "var(--ion-color-primary)",
      fontSize: 15,
      fontWeight: "var(--weight-medium)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(window, {
  LoginScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/login.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Spreekuur — Patient app screens, matched to the real product. Exposes
   screen components on window for app.jsx. */

const S = window.SpreekuurDesignSystem_5ed928;
const Ill1 = window.SUIllustratie1;

/* ---------------- Home / Overzicht ---------------- */
function HomeScreen({
  onOpenDossier,
  onOpenAfspraak,
  onOpenChat
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-app)",
      minHeight: "100%",
      padding: "20px 16px 24px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      lineHeight: "40px",
      margin: 0
    }
  }, "Goedemiddag,", /*#__PURE__*/React.createElement("br", null), "Henk"), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Meldingen",
    style: {
      border: "none",
      background: "transparent",
      color: "var(--ion-color-primary)",
      fontSize: 24,
      cursor: "pointer",
      padding: 4,
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-bell",
    "aria-hidden": "true"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--text-secondary)",
      fontSize: 17
    }
  }, "Waar kunnen we je helpen?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      margin: "28px 0 0"
    }
  }, "Acties"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "12px 0 4px"
    }
  }, /*#__PURE__*/React.createElement(Ill1, {
    type: "notificatie",
    style: {
      width: 120,
      height: 96
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      color: "var(--text-secondary)",
      fontSize: 16
    }
  }, "Je hebt geen openstaande acties")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      margin: "24px 0 12px"
    }
  }, "Direct regelen"), /*#__PURE__*/React.createElement(S.List, null, /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-comment-dots",
    title: "Vraag stellen",
    onClick: onOpenChat
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-folder",
    title: "Dossier ophalen",
    onClick: onOpenDossier
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-capsules",
    title: "Medicijnen bestellen",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-calendar-days",
    title: "Afspraak maken",
    onClick: onOpenAfspraak
  })));
}

/* ---------------- Dossier ---------------- */
function DossierScreen({
  onOpenAfspraken
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-app)",
      minHeight: "100%",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(S.List, null, /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-folder",
    title: "Metingen",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-folder",
    title: "Medisch dossier",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-heart",
    title: "Copiloot",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-capsules",
    title: "Medicijnen",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-calendar-days",
    title: "Afspraken",
    onClick: onOpenAfspraken
  })));
}

/* ---------------- Chats ---------------- */
function ChatsScreen() {
  const rows = [{
    name: "Tobias mock 2",
    date: "18-05-2026",
    sender: "Tobias - NIET VERWIJDEREN -",
    preview: "Afbeelding ontvangen",
    organisation: "Huisartspraktijk Samenwerken Oost",
    unread: true
  }, {
    name: "Test",
    date: "09-10-2025",
    sender: "Tobias - NIET VERWIJDEREN -",
    preview: "hi",
    organisation: "Huisartspraktijk Samenwerken Oost",
    group: true
  }, {
    name: "Gez. inbox zonder member",
    date: "11-08-2025",
    sender: "Tobias - NIET VERWIJDEREN -",
    preview: "Hallo",
    organisation: "Huisartspraktijk Samenwerken Oost",
    group: true
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-app)",
      minHeight: "100%",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(S.List, null, rows.map((r, i) => /*#__PURE__*/React.createElement(S.ChatListItem, _extends({
    key: i
  }, r, {
    onClick: () => {}
  })))));
}

/* ---------------- Profiel ---------------- */
function ProfielScreen({
  onLogout
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-app)",
      minHeight: "100%",
      padding: "24px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      height: 96,
      borderRadius: "50%",
      background: "var(--ion-color-light-shade)",
      color: "var(--ion-color-medium)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 44,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-user",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 26,
      margin: 0
    }
  }, "Henk Demo"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 17,
      marginTop: 2
    }
  }, "Mijn account")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(S.List, null, /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-right-left",
    title: "Iets regelen voor een ander",
    onClick: () => {}
  })), /*#__PURE__*/React.createElement(S.List, null, /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-file-lines",
    title: "Accountgegevens",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-user",
    title: "Persoonlijke gegevens",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-building",
    title: "Mijn organisaties",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-circle-question",
    title: "Help en feedback",
    onClick: () => {}
  }), /*#__PURE__*/React.createElement(S.ListItem, {
    icon: "fa-solid fa-gear",
    title: "Instellingen",
    onClick: () => {}
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onLogout,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      border: "none",
      background: "transparent",
      color: "var(--ion-color-danger)",
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 17,
      fontWeight: "var(--weight-semibold)",
      padding: "8px 0",
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-arrow-right-from-bracket",
    "aria-hidden": "true"
  }), "Log uit")));
}

/* ---------------- Afspraken (Komend / Historie) ---------------- */
function AfsprakenScreen({
  onOpenDetails,
  onOpenAfspraak
}) {
  const [tab, setTab] = React.useState("komend");
  const historie = [{
    date: "Vrijdag 8 mei 2026 10:31",
    status: "Ingepland",
    type: "success",
    sub: "Fysiek bezoek op praktijk"
  }, {
    date: "Vrijdag 8 mei 2026 09:52",
    status: "Geannuleerd",
    type: "danger",
    sub: "Fysiek bezoek op praktijk"
  }, {
    date: "Maandag 4 mei 2026 13:39",
    status: "Afgekeurd",
    type: "danger",
    sub: "Digitaal consult"
  }, {
    date: "Woensdag 18 mrt 2026 13:00",
    status: "Wacht op beoordeling",
    type: "warning",
    sub: "Digitaal consult"
  }, {
    date: "Vrijdag 13 mrt 2026 13:39",
    status: "Wacht op beoordeling",
    type: "warning",
    sub: "Digitaal consult"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-app)",
      minHeight: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement(S.SegmentBar, {
    options: [{
      id: "komend",
      label: "Komend"
    }, {
      id: "historie",
      label: "Historie"
    }],
    value: tab,
    onChange: setTab
  }), tab === "komend" ? /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      paddingTop: 40
    }
  }, /*#__PURE__*/React.createElement(S.EmptyState, {
    illustration: /*#__PURE__*/React.createElement(Ill1, {
      type: "kalender"
    }),
    title: "Geen afspraken gevonden",
    subtitle: "Je hebt geen komende afspraken.",
    action: /*#__PURE__*/React.createElement(S.Button, {
      onClick: onOpenAfspraak
    }, "Afspraak maken"),
    arrow: true
  })) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(S.List, null, historie.map((a, i) => /*#__PURE__*/React.createElement(S.ListItem, {
    key: i,
    title: a.date,
    badge: a.status,
    badgeType: a.type,
    note: a.sub,
    onClick: () => onOpenDetails(a)
  })))));
}

/* ---------------- Afspraak details ---------------- */
function AfspraakDetails({
  afspraak
}) {
  const a = afspraak || {
    date: "Vrijdag 8 mei 2026 om 10:31",
    status: "Ingepland",
    type: "success"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-app)",
      minHeight: "100%",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      lineHeight: "36px",
      margin: "8px 4px 16px"
    }
  }, a.dateLong || "Vrijdag 8 mei 2026 om 10:31"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(S.InlineNotification, {
    type: "info",
    title: "Reactie van de praktijk",
    subtitle: '"Kom maar"'
  })), /*#__PURE__*/React.createElement(S.List, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px",
      background: "var(--surface-card)",
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Status"
  }, /*#__PURE__*/React.createElement(S.Badge, {
    type: "success"
  }, "Ingepland")), /*#__PURE__*/React.createElement(Field, {
    label: "Type afspraak",
    value: "Fysiek bezoek op praktijk"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Organisatie",
    value: "Testpraktijk Medikit"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Agenda",
    value: "Dokter Mertens"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Reden",
    value: "test3"
  }))));
}
function Field({
  label,
  value,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-bold)",
      fontSize: 16,
      color: "var(--text-default)",
      marginBottom: 4
    }
  }, label), value && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: "var(--text-secondary)"
    }
  }, value), children);
}
Object.assign(window, {
  HomeScreen,
  DossierScreen,
  ChatsScreen,
  ProfielScreen,
  AfsprakenScreen,
  AfspraakDetails
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/patient-app/wizard.jsx
try { (() => {
/* Spreekuur — "Dossier ophalen" wizard (the 4-step modal sheet). */

const W = window.SpreekuurDesignSystem_5ed928;
function DossierWizard({
  onClose
}) {
  const [step, setStep] = React.useState(1);
  const total = 4;
  const [query, setQuery] = React.useState("");
  const [org, setOrg] = React.useState(null);
  const [data, setData] = React.useState({
    medicatie: true,
    allergie: true,
    lab: false,
    behandel: false
  });
  const [consent, setConsent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const orgs = [{
    id: "centrum",
    title: "Huisartsenpraktijk Centrum",
    subtitle: "Hoofdstraat 1, Utrecht"
  }, {
    id: "brug",
    title: "Gezondheidscentrum De Brug",
    subtitle: "Kerkplein 12, Utrecht"
  }, {
    id: "noord",
    title: "Huisartsen Noord",
    subtitle: "Lindelaan 8, Utrecht"
  }];
  const filtered = orgs.filter(o => o.title.toLowerCase().includes(query.toLowerCase()) || o.subtitle.toLowerCase().includes(query.toLowerCase()));
  const canNext = step === 1 ? !!org : step === 2 ? Object.values(data).some(Boolean) : step === 3 ? consent : true;
  const goNext = () => {
    if (step < total) {
      setStep(step + 1);
      return;
    }
  };
  const goPrev = () => {
    if (step > 1) setStep(step - 1);
  };

  // Kick off the retrieve animation when arriving on step 4
  React.useEffect(() => {
    if (step === 4) {
      setLoading(true);
      setDone(false);
      const t = setTimeout(() => {
        setLoading(false);
        setDone(true);
      }, 1800);
      return () => clearTimeout(t);
    }
  }, [step]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-app)",
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement(W.Header, {
    title: "Dossier ophalen",
    onClose: onClose
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: "auto"
    }
  }, step === 1 && /*#__PURE__*/React.createElement(Step1, {
    query: query,
    setQuery: setQuery,
    org: org,
    setOrg: setOrg,
    orgs: filtered
  }), step === 2 && /*#__PURE__*/React.createElement(Step2, {
    data: data,
    setData: setData,
    org: org
  }), step === 3 && /*#__PURE__*/React.createElement(Step3, {
    consent: consent,
    setConsent: setConsent,
    org: org
  }), step === 4 && /*#__PURE__*/React.createElement(Step4, {
    loading: loading,
    done: done,
    org: org,
    onClose: onClose
  })), step < 4 && /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderTop: "1px solid var(--color-divider)",
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(W.ProgressBar, {
    value: step / total,
    currentStep: step,
    totalSteps: total,
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    expand: true,
    iconLeft: "fa-solid fa-arrow-left",
    onClick: goPrev,
    disabled: step === 1
  }, "Vorige"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    expand: true,
    iconRight: "fa-solid fa-arrow-right",
    onClick: goNext,
    disabled: !canNext
  }, "Volgende"))));
}

/* Step 1 — choose care provider */
function Step1({
  query,
  setQuery,
  org,
  setOrg,
  orgs
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Zoek jouw organisatie"), /*#__PURE__*/React.createElement(W.Input, {
    label: "Naam of plaats",
    placeholder: "Zoek op naam of plaats",
    value: query,
    onChange: e => setQuery(e.target.value),
    counter: true,
    maxlength: 200
  }), orgs.length > 0 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 14,
      color: "var(--text-secondary)",
      margin: "0 4px 8px"
    }
  }, "Recent gestart met Spreekuur.nl"), /*#__PURE__*/React.createElement(W.List, null, orgs.map(o => /*#__PURE__*/React.createElement(OrgRow, {
    key: o.id,
    o: o,
    selected: org === o.id,
    onSelect: () => setOrg(o.id)
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      borderRadius: "var(--radius-md)",
      border: "1px solid var(--color-divider)"
    }
  }, /*#__PURE__*/React.createElement(W.EmptyState, {
    illustration: /*#__PURE__*/React.createElement(window.SUIllustratie1, {
      type: "zoeken"
    }),
    title: "Geen resultaten gevonden",
    subtitle: "Probeer het opnieuw met andere zoektermen."
  })));
}
function OrgRow({
  o,
  selected,
  onSelect
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onSelect,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      cursor: "pointer",
      background: selected ? "var(--ion-color-secondary)" : "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement(window.SpreekuurDesignSystem_5ed928.Radio, {
    checked: selected,
    onChange: onSelect
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 16,
      color: "var(--text-default)"
    }
  }, o.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, o.subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 40,
      borderRadius: "var(--radius-sm)",
      background: "var(--ion-color-light)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--color-placeholder)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: "fa-solid fa-hospital",
    "aria-hidden": "true"
  })));
}

/* Step 2 — choose which data */
function Step2({
  data,
  setData
}) {
  const toggle = k => setData({
    ...data,
    [k]: !data[k]
  });
  const rows = [{
    k: "medicatie",
    icon: "fa-solid fa-pills",
    title: "Medicatie",
    sub: "Actuele en eerdere medicijnen"
  }, {
    k: "allergie",
    icon: "fa-solid fa-disease",
    title: "Allergieën",
    sub: "Bekende allergieën en intoleranties"
  }, {
    k: "lab",
    icon: "fa-solid fa-vials",
    title: "Labuitslagen",
    sub: "Bloed- en urineonderzoek"
  }, {
    k: "behandel",
    icon: "fa-solid fa-file-medical",
    title: "Behandelingen",
    sub: "Verrichtingen en verwijzingen"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Welke gegevens wil je ophalen?"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--text-secondary)"
    }
  }, "Kies de onderdelen van je dossier die je wilt ophalen.")), /*#__PURE__*/React.createElement(W.List, null, rows.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.k,
    onClick: () => toggle(r.k),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "14px 16px",
      cursor: "pointer",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: r.icon,
    style: {
      color: "var(--ion-color-primary)",
      width: 24,
      textAlign: "center"
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: "var(--weight-semibold)",
      fontSize: 16
    }
  }, r.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-secondary)"
    }
  }, r.sub)), /*#__PURE__*/React.createElement(window.SpreekuurDesignSystem_5ed928.Checkbox, {
    checked: data[r.k],
    onChange: () => toggle(r.k)
  })))));
}

/* Step 3 — consent (DVA) */
function Step3({
  consent,
  setConsent,
  org
}) {
  const orgName = {
    centrum: "Huisartsenpraktijk Centrum",
    brug: "Gezondheidscentrum De Brug",
    noord: "Huisartsen Noord"
  }[org] || "je zorgaanbieder";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "Geef toestemming"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--text-secondary)"
    }
  }, "Je geeft ", /*#__PURE__*/React.createElement("strong", null, orgName), " toestemming om je medische gegevens digitaal te delen via Spreekuur.nl.")), /*#__PURE__*/React.createElement(W.InlineNotification, {
    type: "info",
    title: "Veilig en versleuteld",
    subtitle: "Je gegevens worden alleen gedeeld met de gekozen organisatie."
  }), /*#__PURE__*/React.createElement("div", {
    onClick: () => setConsent(!consent),
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: 16,
      background: "var(--surface-card)",
      border: "1px solid var(--color-divider)",
      borderRadius: "var(--radius-md)",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement(window.SpreekuurDesignSystem_5ed928.Checkbox, {
    checked: consent,
    onChange: () => setConsent(!consent)
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: "22px"
    }
  }, "Ik geef toestemming om mijn dossier op te halen en ga akkoord met de voorwaarden.")));
}

/* Step 4 — retrieving / success */
function Step4({
  loading,
  done,
  onClose
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 16px",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }
  }, loading && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "auto",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      border: "4px solid var(--ion-color-secondary)",
      borderTopColor: "var(--ion-color-primary)",
      borderRadius: "50%",
      margin: "0 auto 20px",
      animation: "su-spin 0.8s linear infinite"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0
    }
  }, "Je dossier wordt opgehaald\u2026"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "8px 0 0",
      color: "var(--text-secondary)"
    }
  }, "Dit duurt meestal een paar seconden."), /*#__PURE__*/React.createElement("style", null, `@keyframes su-spin{to{transform:rotate(360deg)}}`)), done && /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "auto",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(W.EmptyState, {
    illustration: /*#__PURE__*/React.createElement(window.SUIllustratie1, {
      type: "dossier"
    }),
    title: "Je dossier is opgehaald",
    subtitle: "De gekozen gegevens staan nu klaar in je dossier.",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconRight: "fa-solid fa-check",
      onClick: onClose
    }, "Bekijk mijn dossier")
  })));
}
Object.assign(window, {
  DossierWizard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/patient-app/wizard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zelfzorgadvies/design-canvas.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Exports (to window): DesignCanvas, DCSection, DCArtboard, DCPostIt.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>
//
// Artboards are static design frames, not scroll regions — never use
// height: 100% + overflow: auto/scroll on inner elements; size each artboard
// to fit its content (explicit pixel height, or let it grow).
/* END USAGE */

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-omelette-chrome": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zelfzorgadvies/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/zelfzorgadvies/screens.jsx
try { (() => {
/* Spreekuur — Zelfzorgadvies (triage-uitkomsten U5 & U4).
   Toont het advies dat de patiënt éénmalig te zien krijgt nadat de digitale
   triage klaar is. Twee scenario's: U5 (zelfzorg, kneuzing voet) en U4
   (kan wachten tot morgen — 's avonds via de huisartsenspoedpost).
   Alles in een IIFE zodat globale namen niet botsen met andere babel-scripts. */
(() => {
  const DS = window.SpreekuurDesignSystem_5ed928;

  /* ---------------- gedeelde chrome ---------------- */
  function StatusBar({
    bg = "var(--surface-card)",
    time = "9:41"
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: 44,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px",
        fontSize: 14,
        fontWeight: 600,
        color: "var(--text-default)",
        background: bg
      }
    }, /*#__PURE__*/React.createElement("span", null, time), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-signal"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-wifi"
    }), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-battery-full"
    })));
  }
  function Frame({
    children,
    bg = "var(--surface-app)",
    height = 844
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: 390,
        height,
        display: "flex",
        flexDirection: "column",
        background: bg,
        fontFamily: "var(--font-body)",
        overflow: "hidden"
      }
    }, children);
  }
  function Sparkle({
    size = 18,
    color = "var(--ion-color-primary)"
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      "aria-hidden": "true",
      style: {
        display: "block",
        flex: "none"
      }
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 2 L14.2 9.8 L22 12 L14.2 14.2 L12 22 L9.8 14.2 L2 12 L9.8 9.8 Z",
      fill: color
    }), /*#__PURE__*/React.createElement("path", {
      d: "M19 2.5 L19.9 5.1 L22.5 6 L19.9 6.9 L19 9.5 L18.1 6.9 L15.5 6 L18.1 5.1 Z",
      fill: color,
      opacity: "0.75"
    }));
  }

  /* ---------------- chat-primitieven (triage-context) ---------------- */
  function AgentAvatar({
    size = 32,
    spoed = false
  }) {
    if (spoed) {
      return /*#__PURE__*/React.createElement("div", {
        style: {
          width: size,
          height: size,
          flex: "none",
          borderRadius: "50%",
          background: "var(--ion-color-light-shade)",
          color: "var(--ion-color-medium)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: size * 0.45
        }
      }, /*#__PURE__*/React.createElement("i", {
        className: "fa-solid fa-user-nurse",
        "aria-hidden": "true"
      }));
    }
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: size,
        height: size,
        flex: "none",
        borderRadius: "50%",
        background: "var(--surface-accent)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement(Sparkle, {
      size: size * 0.5
    }));
  }
  function ChatHeader({
    title,
    subtitle,
    spoed = false
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 12px",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-chevron-left",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 18,
        padding: 8
      }
    }), /*#__PURE__*/React.createElement(AgentAvatar, {
      size: 36,
      spoed: spoed
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: "var(--weight-semibold)",
        fontSize: 16,
        lineHeight: "22px",
        color: "var(--text-default)",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: "17px",
        color: "var(--text-secondary)"
      }
    }, subtitle)), /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-info",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 18,
        padding: 8
      }
    }));
  }
  function AgentBubble({
    children,
    showAvatar = true
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end",
        maxWidth: "100%"
      }
    }, showAvatar ? /*#__PURE__*/React.createElement(AgentAvatar, null) : /*#__PURE__*/React.createElement("div", {
      style: {
        width: 32,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "0 1 auto",
        minWidth: 0,
        maxWidth: 286
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        padding: "12px 14px",
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, children)));
  }
  function PatientBubble({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "flex-end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 286,
        background: "var(--ion-color-primary)",
        color: "#fff",
        borderRadius: "16px 16px 4px 16px",
        padding: "12px 14px",
        fontSize: 16,
        lineHeight: "23px"
      }
    }, children));
  }
  function SystemNote({
    children,
    icon
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        padding: "2px 20px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "flex-start",
        gap: 8,
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--text-secondary)",
        textAlign: "center"
      }
    }, icon && /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        fontSize: 12,
        marginTop: 2
      }
    }), /*#__PURE__*/React.createElement("span", null, children)));
  }
  function Chip({
    children,
    selected = false
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        minHeight: 44,
        padding: "10px 18px",
        borderRadius: 24,
        border: "1.5px solid var(--ion-color-primary)",
        background: selected ? "var(--ion-color-primary)" : "var(--ion-color-white)",
        color: selected ? "#fff" : "var(--ion-color-primary)",
        fontSize: 16,
        fontWeight: "var(--weight-medium)"
      }
    }, children);
  }
  function ChipRow({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        paddingLeft: 42
      }
    }, children);
  }
  function TriageQuestion({
    q,
    step = "Laatste vraag",
    pct = 100,
    options = [],
    selected
  }) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement(AgentAvatar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0,
        maxWidth: 300,
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        padding: "12px 14px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12.5,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-secondary)",
        whiteSpace: "nowrap"
      }
    }, step), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 4,
        borderRadius: 2,
        background: "var(--ion-color-secondary-shade)",
        overflow: "hidden",
        display: "block"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "block",
        width: `${pct}%`,
        height: "100%",
        background: "var(--ion-color-primary)",
        borderRadius: 2
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 16,
        lineHeight: "23px",
        color: "var(--text-default)"
      }
    }, q))), /*#__PURE__*/React.createElement(ChipRow, null, options.map(o => /*#__PURE__*/React.createElement(Chip, {
      key: o,
      selected: o === selected
    }, o))));
  }
  function TypingIndicator({
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-end"
      }
    }, /*#__PURE__*/React.createElement(AgentAvatar, null), /*#__PURE__*/React.createElement("div", {
      style: {
        background: "var(--surface-card)",
        border: "1px solid var(--color-divider)",
        borderRadius: "16px 16px 16px 4px",
        padding: "14px 16px",
        display: "flex",
        gap: 8,
        alignItems: "center"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "flex",
        gap: 5
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: "var(--color-divider)",
        animation: `zz-typing 1.2s ${i * 0.18}s infinite`
      }
    }))), label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13.5,
        color: "var(--text-secondary)"
      }
    }, label), /*#__PURE__*/React.createElement("style", null, `@keyframes zz-typing{0%,60%,100%{opacity:.4;transform:translateY(0)}30%{opacity:1;transform:translateY(-3px)}}@media (prefers-reduced-motion:reduce){[style*="zz-typing"]{animation:none!important}}`)));
  }

  /* ---------------- uitkomst-primitieven ---------------- */
  /* Urgentie-badge. De U-code is prominent zichtbaar (NTS/NHG-urgentiecodes:
     U5 = zelfzorgadvies, geen contact nodig; U4 = kan tot 24 uur wachten). */
  function UrgencyBadge({
    icon = "fa-solid fa-circle-check",
    label
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        background: "var(--ion-color-white)",
        border: "1px solid var(--ion-color-secondary-shade)",
        borderRadius: 22,
        padding: "6px 14px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: icon,
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 13
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        fontWeight: "var(--weight-semibold)",
        color: "var(--ion-color-primary)",
        letterSpacing: "0.02em",
        whiteSpace: "nowrap"
      }
    }, label));
  }
  function OutcomeHero({
    title,
    intro,
    children,
    card = false
  }) {
    const cardStyle = card ? {
      background: "var(--surface-subtle)",
      border: "1px solid var(--ion-color-secondary-shade)",
      borderRadius: 12,
      padding: 16
    } : {
      background: "var(--surface-subtle)",
      borderBottom: "1px solid var(--ion-color-secondary-shade)",
      padding: "16px 20px 18px"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: cardStyle
    }, /*#__PURE__*/React.createElement("h1", {
      style: {
        fontSize: 24,
        lineHeight: "30px",
        margin: "0 0 7px",
        color: "var(--text-default)"
      }
    }, title), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontSize: 15.5,
        lineHeight: "22px",
        color: "var(--text-default)"
      }
    }, intro), children && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, children));
  }
  function SectionTitle({
    children,
    style
  }) {
    return /*#__PURE__*/React.createElement("h2", {
      style: {
        fontSize: 20,
        lineHeight: "26px",
        margin: "0 0 12px",
        color: "var(--text-default)",
        ...style
      }
    }, children);
  }
  function StepList({
    items
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 12
      }
    }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-check",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-success)",
        fontSize: 18,
        marginTop: 2,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15.5,
        lineHeight: "22px",
        color: "var(--text-default)"
      }
    }, s))));
  }

  /* Genuanceerde "let op"-blok — waarschuwingstint, nooit alarmerend rood. */
  function WatchOut({
    title,
    items,
    footer
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 12,
        background: "var(--ion-color-warning-lighter)",
        padding: "16px 16px 16px 16px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-exclamation",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-warning-shade)",
        fontSize: 18
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15.5,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)"
      }
    }, title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, items.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        display: "flex",
        gap: 10,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "var(--ion-color-warning-shade)",
        flex: "none",
        marginTop: 8
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14.5,
        lineHeight: "21px",
        color: "var(--text-default)"
      }
    }, s)))), footer && /*#__PURE__*/React.createElement("p", {
      style: {
        margin: "12px 0 0",
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--text-default)",
        fontWeight: "var(--weight-medium)"
      }
    }, footer));
  }

  /* Kleine, geruststellende toelichting (waarom deze uitkomst) */
  function InfoBlock({
    title,
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderRadius: 12,
        background: "var(--surface-subtle)",
        padding: 16,
        display: "flex",
        gap: 12,
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-circle-info",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 17,
        marginTop: 1,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("div", null, title && /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 15,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)",
        marginBottom: 3
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 14.5,
        lineHeight: "21px",
        color: "var(--text-secondary)"
      }
    }, children)));
  }

  /* U4: geruststellende toelichting (waarom deze uitkomst) */
  function SourceDisclaimer() {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "var(--text-secondary)",
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontWeight: "var(--weight-semibold)",
        color: "var(--brand-turquoise-shade)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-house-medical",
      "aria-hidden": "true",
      style: {
        fontSize: 12
      }
    }), " Thuisarts.nl"), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true"
    }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "Nederlandse Triage Standaard")), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, "Dit advies is afgestemd op je antwoorden. Het vervangt geen onderzoek door je huisarts."));
  }
  function EenmaligNote() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        alignItems: "flex-start",
        padding: "0 2px"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-regular fa-eye",
      "aria-hidden": "true",
      style: {
        color: "var(--text-secondary)",
        fontSize: 13,
        marginTop: 2,
        flex: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 13,
        lineHeight: "18px",
        color: "var(--text-secondary)"
      }
    }, "Je ziet dit advies eenmalig. Bewaar of deel het als je het later wilt teruglezen."));
  }
  function SaveShareRow() {
    const items = [{
      icon: "fa-regular fa-bookmark",
      label: "Bewaren"
    }, {
      icon: "fa-solid fa-arrow-up-from-bracket",
      label: "Delen"
    }, {
      icon: "fa-regular fa-file-pdf",
      label: "Pdf"
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8
      }
    }, items.map(it => /*#__PURE__*/React.createElement("button", {
      key: it.label,
      style: {
        flex: 1,
        minHeight: 52,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        borderRadius: 10,
        border: "1px solid var(--color-divider)",
        background: "var(--ion-color-white)",
        color: "var(--ion-color-primary)",
        fontFamily: "var(--font-body)",
        fontSize: 12.5,
        fontWeight: "var(--weight-medium)",
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: it.icon,
      "aria-hidden": "true",
      style: {
        fontSize: 16
      }
    }), it.label)));
  }
  function TextLink({
    children,
    danger = false
  }) {
    return /*#__PURE__*/React.createElement("button", {
      style: {
        width: "100%",
        minHeight: 44,
        border: "none",
        background: "transparent",
        color: danger ? "var(--ion-color-danger)" : "var(--ion-color-primary)",
        fontFamily: "var(--font-body)",
        fontSize: 15.5,
        fontWeight: "var(--weight-semibold)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
      }
    }, children);
  }

  /* Body-wrapper voor de uitkomstschermen: koptekstbalk + inhoud onder de hero */
  function OutcomeBody({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 22,
        padding: "22px 20px 26px"
      }
    }, children);
  }
  function OutcomeHeaderBar({
    title
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        gap: 4,
        height: 56,
        padding: "0 8px",
        background: "var(--surface-card)",
        borderBottom: "1px solid var(--color-divider)"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true",
      style: {
        color: "var(--ion-color-primary)",
        fontSize: 20,
        padding: 10
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)"
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 38
      }
    }));
  }

  /* =========================================================
     1. U5 — Triage, laatste vraag (kneuzing voet)
     ========================================================= */
  function U5TriageScreen() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "var(--surface-app)"
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(ChatHeader, {
      title: "Assistent",
      subtitle: "Digitale triage \xB7 jouw praktijk"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(SystemNote, {
      icon: "fa-solid fa-shield-halved"
    }, "Je antwoorden worden veilig verwerkt. Een zorgverlener kan meelezen."), /*#__PURE__*/React.createElement(PatientBubble, null, "Ik heb mijn voet gestoten tegen de tafel. Hij is dik en doet pijn."), /*#__PURE__*/React.createElement(AgentBubble, null, "Vervelend! Ik stel je nog een paar korte vragen, dan weet ik wat je het beste kunt doen."), /*#__PURE__*/React.createElement(TriageQuestion, {
      q: "Kun je nog op je voet staan en er een paar stappen mee lopen?",
      step: "Vraag 6 van 6",
      pct: 100,
      options: ["Ja, met wat pijn", "Nauwelijks", "Nee"],
      selected: "Ja, met wat pijn"
    }), /*#__PURE__*/React.createElement(PatientBubble, null, "Ja, met wat pijn"), /*#__PURE__*/React.createElement(TypingIndicator, {
      label: "Advies wordt bepaald\u2026"
    })));
  }

  /* =========================================================
     2. U5 — Zelfzorgadvies (kneuzing voet)
     ========================================================= */
  function U5AdviceScreen() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "var(--surface-card)",
      height: 1265
    }, /*#__PURE__*/React.createElement(StatusBar, null), /*#__PURE__*/React.createElement(OutcomeHeaderBar, {
      title: "Advies"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(OutcomeHero, {
      title: "Je kunt je voet goed zelf verzorgen",
      intro: "Op basis van je antwoorden hoeft de praktijk hier nu niet naar te kijken. Een kneuzing van de voet gaat meestal vanzelf over binnen 1 tot 2 weken."
    }), /*#__PURE__*/React.createElement(OutcomeBody, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Wat kun je zelf doen?"), /*#__PURE__*/React.createElement(StepList, {
      items: ["Ontzie je voet de eerste 1–2 dagen. Beweeg wél licht zodra het kan.", "Koel 10–15 minuten met een coldpack in een doek. Herhaal een paar keer per dag.", "Leg je voet regelmatig hoog, bijvoorbeeld op een kussen.", "Neem zo nodig paracetamol tegen de pijn. Houd de bijsluiter aan.", "Draag stevige, goed zittende schoenen en vermijd lang staan."]
    })), /*#__PURE__*/React.createElement(WatchOut, {
      title: "Neem t\xF3ch contact op als:",
      items: ["je niet op je voet kunt staan of steunen", "je voet erg dik wordt, koud aanvoelt of gevoelloos wordt", "de pijn na een paar dagen juist erger wordt", "de klachten na 2 weken niet over zijn"],
      footer: "Bel overdag je eigen praktijk. Buiten kantooruren: de huisartsenspoedpost."
    }), /*#__PURE__*/React.createElement(SourceDisclaimer, null), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--color-divider)",
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(EenmaligNote, null), /*#__PURE__*/React.createElement(SaveShareRow, null), /*#__PURE__*/React.createElement(DS.Button, {
      expand: true
    }, "Klaar"), /*#__PURE__*/React.createElement(TextLink, null, "Toch een vraag stellen aan de praktijk")))));
  }

  /* =========================================================
     3. U4 — Triage bij de huisartsenspoedpost ('s avonds)
     ========================================================= */
  function U4TriageScreen() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "var(--surface-app)"
    }, /*#__PURE__*/React.createElement(StatusBar, {
      time: "21:14"
    }), /*#__PURE__*/React.createElement(ChatHeader, {
      title: "Huisartsenspoedpost",
      subtitle: "Avond-, nacht- en weekendzorg",
      spoed: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        padding: "16px 14px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(SystemNote, {
      icon: "fa-solid fa-moon"
    }, "Buiten kantooruren. Je praat met de digitale triage van de huisartsenspoedpost."), /*#__PURE__*/React.createElement(PatientBubble, null, "Ik heb al een paar dagen last bij het plassen en wilde vragen of dat kwaad kan."), /*#__PURE__*/React.createElement(AgentBubble, null, "Ik stel een paar korte vragen om te kijken of dit vanavond aandacht nodig heeft."), /*#__PURE__*/React.createElement(TriageQuestion, {
      q: "Heb je koorts (38 \xB0C of hoger) of pijn in je zij of onderrug?",
      step: "Vraag 5 van 5",
      pct: 100,
      options: ["Ja", "Nee"],
      selected: "Nee"
    }), /*#__PURE__*/React.createElement(PatientBubble, null, "Nee, alleen een beetje pijn bij het plassen."), /*#__PURE__*/React.createElement(TypingIndicator, {
      label: "Advies wordt bepaald\u2026"
    })));
  }

  /* =========================================================
     4. U4 — Advies: kan wachten tot morgen
     ========================================================= */
  function U4AdviceScreen() {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "var(--surface-card)",
      height: 1359
    }, /*#__PURE__*/React.createElement(StatusBar, {
      time: "21:15"
    }), /*#__PURE__*/React.createElement(OutcomeHeaderBar, {
      title: "Advies"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(OutcomeHero, {
      title: "Dit kan veilig wachten tot morgen",
      intro: "Je antwoorden wijzen niet op een spoedgeval. Je stelt deze vraag morgen beter aan je eigen huisartsenpraktijk \u2014 die kent jou en je dossier."
    }), /*#__PURE__*/React.createElement(OutcomeBody, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Wat kun je nu doen?"), /*#__PURE__*/React.createElement(StepList, {
      items: ["Rust vannacht uit en houd je klachten in de gaten.", "Blijf normaal drinken en neem zo nodig paracetamol volgens de bijsluiter.", "Schrijf kort op wat je wilt vragen, dan heb je het morgen bij de hand."]
    })), /*#__PURE__*/React.createElement(InfoBlock, {
      title: "Waarom nu niet de spoedpost?"
    }, "De huisartsenspoedpost is er 's avonds en 's nachts alleen voor klachten die niet tot de ochtend kunnen wachten. Zo blijven zij bereikbaar voor spoed. Jouw eigen praktijk kan je morgen completer helpen."), /*#__PURE__*/React.createElement(WatchOut, {
      title: "Bel vannacht t\xF3ch de spoedpost als:",
      items: ["je klachten snel erger worden", "je koorts krijgt (38 °C of hoger) of je je heel ziek voelt", "je bloed bij de plas ziet of niet meer kunt plassen", "je het niet vertrouwt"],
      footer: "Huisartsenspoedpost: 088 \u2013 123 45 67. Levensbedreigend? Bel 112."
    }), /*#__PURE__*/React.createElement(SourceDisclaimer, null), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--color-divider)",
        paddingTop: 20,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(EenmaligNote, null), /*#__PURE__*/React.createElement(SaveShareRow, null), /*#__PURE__*/React.createElement(DS.Button, {
      expand: true
    }, "Klaar"), /*#__PURE__*/React.createElement(TextLink, null, "Toch een vraag stellen aan de praktijk")))));
  }

  /* =========================================================
     Wizard-integratie — het advies als laatste stap van de
     triage-wizard. De bestaande wizard-footer (secondary + primary)
     draagt de twee keuzes: "Toch een vraag stellen" (uitwijk naar de
     praktijk) en "Afronden" (advies afsluiten). De DS ProgressBar en
     DS Button worden 1-op-1 gebruikt, net als in Wizard.jsx.
     ========================================================= */
  function WizardShell({
    title,
    statusTime = "9:41",
    step,
    total,
    secondaryLabel,
    primaryLabel,
    height,
    children
  }) {
    return /*#__PURE__*/React.createElement(Frame, {
      bg: "var(--surface-app)",
      height: height
    }, /*#__PURE__*/React.createElement(StatusBar, {
      time: statusTime
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        display: "flex",
        alignItems: "center",
        height: 56,
        padding: "0 8px",
        borderBottom: "1px solid var(--color-divider)",
        background: "var(--surface-card)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "var(--weight-semibold)",
        color: "var(--text-default)"
      }
    }, title), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Sluiten",
      style: {
        width: 40,
        height: 40,
        border: "none",
        background: "transparent",
        color: "var(--ion-color-primary)",
        fontSize: 20,
        cursor: "pointer"
      }
    }, /*#__PURE__*/React.createElement("i", {
      className: "fa-solid fa-xmark",
      "aria-hidden": "true"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minHeight: 0,
        overflow: "hidden",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 20
      }
    }, children)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: "none",
        background: "var(--surface-card)",
        borderTop: "1px solid var(--color-divider)",
        padding: 16
      }
    }, /*#__PURE__*/React.createElement(DS.ProgressBar, {
      value: step / total,
      currentStep: step,
      totalSteps: total,
      style: {
        marginBottom: 14
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(DS.Button, {
      variant: "secondary",
      expand: true
    }, secondaryLabel), /*#__PURE__*/React.createElement(DS.Button, {
      variant: "primary",
      expand: true
    }, primaryLabel))));
  }
  function WizardUtilityFooter() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: "1px solid var(--color-divider)",
        paddingTop: 18,
        display: "flex",
        flexDirection: "column",
        gap: 14
      }
    }, /*#__PURE__*/React.createElement(EenmaligNote, null), /*#__PURE__*/React.createElement(SaveShareRow, null));
  }

  /* U5 — zelfzorgadvies als laatste wizard-stap */
  function U5AdviceWizardScreen() {
    return /*#__PURE__*/React.createElement(WizardShell, {
      title: "Advies",
      step: 6,
      total: 6,
      secondaryLabel: "Toch een vraag stellen",
      primaryLabel: "Afronden",
      height: 1260
    }, /*#__PURE__*/React.createElement(OutcomeHero, {
      card: true,
      title: "Je kunt je voet goed zelf verzorgen",
      intro: "Op basis van je antwoorden hoeft de praktijk hier nu niet naar te kijken. Een kneuzing van de voet gaat meestal vanzelf over binnen 1 tot 2 weken."
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Wat kun je zelf doen?"), /*#__PURE__*/React.createElement(StepList, {
      items: ["Ontzie je voet de eerste 1–2 dagen. Beweeg wél licht zodra het kan.", "Koel 10–15 minuten met een coldpack in een doek. Herhaal een paar keer per dag.", "Leg je voet regelmatig hoog, bijvoorbeeld op een kussen.", "Neem zo nodig paracetamol tegen de pijn. Houd de bijsluiter aan.", "Draag stevige, goed zittende schoenen en vermijd lang staan."]
    })), /*#__PURE__*/React.createElement(WatchOut, {
      title: "Neem t\xF3ch contact op als:",
      items: ["je niet op je voet kunt staan of steunen", "je voet erg dik wordt, koud aanvoelt of gevoelloos wordt", "de pijn na een paar dagen juist erger wordt", "de klachten na 2 weken niet over zijn"],
      footer: "Bel overdag je eigen praktijk. Buiten kantooruren: de huisartsenspoedpost."
    }), /*#__PURE__*/React.createElement(SourceDisclaimer, null), /*#__PURE__*/React.createElement(WizardUtilityFooter, null));
  }

  /* U4 — advies (kan wachten tot morgen) als laatste wizard-stap */
  function U4AdviceWizardScreen() {
    return /*#__PURE__*/React.createElement(WizardShell, {
      title: "Advies",
      statusTime: "21:15",
      step: 5,
      total: 5,
      secondaryLabel: "Toch een vraag stellen",
      primaryLabel: "Afronden",
      height: 1354
    }, /*#__PURE__*/React.createElement(OutcomeHero, {
      card: true,
      title: "Dit kan veilig wachten tot morgen",
      intro: "Je antwoorden wijzen niet op een spoedgeval. Je stelt deze vraag morgen beter aan je eigen huisartsenpraktijk \u2014 die kent jou en je dossier."
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionTitle, null, "Wat kun je nu doen?"), /*#__PURE__*/React.createElement(StepList, {
      items: ["Rust vannacht uit en houd je klachten in de gaten.", "Blijf normaal drinken en neem zo nodig paracetamol volgens de bijsluiter.", "Schrijf kort op wat je wilt vragen, dan heb je het morgen bij de hand."]
    })), /*#__PURE__*/React.createElement(InfoBlock, {
      title: "Waarom nu niet de spoedpost?"
    }, "De huisartsenspoedpost is er 's avonds en 's nachts alleen voor klachten die niet tot de ochtend kunnen wachten. Zo blijven zij bereikbaar voor spoed. Jouw eigen praktijk kan je morgen completer helpen."), /*#__PURE__*/React.createElement(WatchOut, {
      title: "Bel vannacht t\xF3ch de spoedpost als:",
      items: ["je klachten snel erger worden", "je koorts krijgt (38 °C of hoger) of je je heel ziek voelt", "je bloed bij de plas ziet of niet meer kunt plassen", "je het niet vertrouwt"],
      footer: "Huisartsenspoedpost: 088 \u2013 123 45 67. Levensbedreigend? Bel 112."
    }), /*#__PURE__*/React.createElement(SourceDisclaimer, null), /*#__PURE__*/React.createElement(WizardUtilityFooter, null));
  }
  window.ZZScreens = {
    U5TriageScreen,
    U5AdviceScreen,
    U4TriageScreen,
    U4AdviceScreen,
    U5AdviceWizardScreen,
    U4AdviceWizardScreen
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/zelfzorgadvies/screens.jsx", error: String((e && e.message) || e) }); }

// whitepaper/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "whitepaper/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Wizard = __ds_scope.Wizard;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.InlineNotification = __ds_scope.InlineNotification;

__ds_ns.ReadOnly = __ds_scope.ReadOnly;

__ds_ns.SkeletonListItem = __ds_scope.SkeletonListItem;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.RowContent = __ds_scope.RowContent;

__ds_ns.Thumb = __ds_scope.Thumb;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ChatListItem = __ds_scope.ChatListItem;

__ds_ns.Header = __ds_scope.Header;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.List = __ds_scope.List;

__ds_ns.ListSection = __ds_scope.ListSection;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.SegmentBar = __ds_scope.SegmentBar;

__ds_ns.TabBar = __ds_scope.TabBar;

})();
