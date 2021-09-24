# Preact Aria Widgets

Preact props that implement ARIA-compliant widgets in the style of `preact-prop-helpers` (i.e. hooks that return hooks).  **No CSS is provided** &ndash; this library is intended for wiring up event handlers, `aria` attributes, labels, and so on, but each hook gives you the information you need to create appropriate e.g. `class` values to style your own components.

Documentation, testing, production-readiness are all TODO.

Current components:

1. Accordion
2. Button
3. Checkbox
4. Checkbox group (w/ tri-state parent)
5. Dialog (modal)
6. Drawer (modal)
7. Listbox (single & multi)
8. Menu (w/ menu button)
9. Radio Group
10. Tabs & tab panels
11. Table
12. Toasts (a.k.a. Snackbars)
13. Tooltip

Other components (e.g. tree views) are TODO

## Methods

Components like list boxes, radio groups, tables, etc. are implemented with parent & child communication where each child, on mount, provides the parent with access to its internals, and the parent then, in turn, uses those to orchestrate communication between everyone.  For example, when the selected index of a listbox changes, the parent (with that prop) notifies the previous child that it's no longer selected, and the next child that it is, but no other children are notified and so they do not re-render themselves (this is in contrast to a `Context` approach, which would notify *all* children).  It can do this because each child has a state variable tracking if it's *the* selected item, and provides the *setter* for that state variable to the parent, which it calls as necessary.

