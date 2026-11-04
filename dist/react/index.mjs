import { identity } from "lodash-es";
import { EventDetail, EventDetail as EventDetail$1, assertEmptyObject, createContext, createElement, createPortal, enhanceEvent, enhanceEvent as enhanceEvent$1, findBackupFocus, findFirstFocusable, focus as focus$1, generateRandomId, getDocument, getWindow, identity as identity$1, memo, returnFalse, returnNull, returnTrue, returnZero, useAsyncHandler, useCallback, useChildrenFlag, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useCompleteGridNavigationRowDeclarative, useCompleteGridNavigationRowOuter, useCompleteGridNavigationRows, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationChildDeclarative, useCompleteListNavigationChildren, useCompleteListNavigationDeclarative, useContext, useDismiss, useEffect, useEnsureStability, useGlobalHandler, useHasCurrentFocus, useImperativeHandle, useLayoutEffect, useLinearNavigation, useManagedChild, useManagedChildren, useMemo, useMemoObject, useMergedProps, useModal, useMonitoring, useMonitoring as useMonitoring$1, usePassiveState, usePersistentState, usePortalChildren, usePress, useProcessedChild, useRandomDualIds, useRandomId, useRef, useRefElement, useStableCallback, useStableGetter, useState, useTextContent, useTimeout, useTypeaheadNavigation, useTypeaheadNavigationChild } from "preact-prop-helpers/react";
import { Fragment, jsx, jsxs } from "preact/jsx-runtime";
import { createContext as createContext$1 } from "preact";
// src/props.ts
function useContextWithWarning(context, parentContextName) {
	let ret = useContext(context);
	if (ret == null) {
		debugger;
		console.error(`This child is missing its parent ${parentContextName} context`);
	}
	return ret;
}
function noop() {}
const Prefices = {
	accordionSectionHeaderButton: "ashb-",
	accordionSectionBody: "asb-",
	checkboxLikeInput: "cbli-",
	checkboxLikeLabel: "cbll-",
	dialog: "mdl-",
	dialogTitle: "mdlt-",
	drawer: "mdw-",
	drawerTitle: "mdwt-",
	gridlist: "gl-",
	gridlistLabel: "gll-",
	listbox: "lb-",
	listboxLabel: "lbl-",
	menu: "menu-",
	progressIndicator: "pi-",
	progressLabel: "pl-",
	radioGroup: "rg-",
	radioGroupLabel: "rgl-",
	radio: "rb-",
	radioLabel: "rbl-",
	sliderThumb: "st-",
	table: "tb-",
	tableLabel: "tbl-",
	tablist: "tl-",
	tablistLabel: "tll-",
	tooltip: "tt-",
	toolbar: "tlb-",
	toolbarLabel: "tlbl-"
};
// src/use-button.ts
/**
* Implements a [Button](https://www.w3.org/WAI/ARIA/apg/patterns/button/) pattern.
* 
* @remarks The press handler is sync by default. See `useProgressWithHandler` to turn an async function into a sync function with a progress bar.
* 
* @compositeParams
*/
function useButton({ buttonParameters: { tagButton, disabled, pressed, role, onPressSync, ...void1 }, pressParameters: { focusSelf, allowRepeatPresses, longPressThreshold, onPressingChange, excludeSpace, ...void3 }, refElementParameters, ...void2 }) {
	return useMonitoring(function useButton() {
		const { refElementReturn, propsStable: propsRef, ...void5 } = useRefElement({ refElementParameters });
		const { pressReturn, props: propsPress, ...void4 } = usePress({
			refElementReturn,
			pressParameters: {
				onPressSync: useStableCallback((e) => {
					if (!disabled) onPressSync?.(enhanceEvent(e, { pressed: pressed == null ? void 0 : !pressed }));
				}),
				focusSelf,
				allowRepeatPresses,
				excludeEnter: returnFalse,
				excludePointer: returnFalse,
				excludeSpace,
				longPressThreshold,
				onPressingChange
			}
		});
		const baseProps = { "aria-pressed": pressed === true ? "true" : pressed === false ? "false" : void 0 };
		const buttonProps = {
			...baseProps,
			disabled: disabled && disabled != "soft" ? true : false,
			"aria-disabled": disabled === "soft" ? "true" : void 0,
			role: role == "button" ? void 0 : role
		};
		const divProps = {
			...baseProps,
			tabIndex: disabled === "hard" ? -1 : 0,
			role: role || "button",
			"aria-disabled": disabled ? "true" : void 0
		};
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		assertEmptyObject(void4);
		assertEmptyObject(void5);
		return {
			pressReturn,
			props: useMergedProps(propsPress, propsRef, tagButton == "button" ? buttonProps : divProps),
			refElementReturn
		};
	});
}
// src/use-accordion.tsx
/**
* Implements an [Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) pattern.
* 
* @remarks Accordions can be single-select or multi-select. For multi-select accordions, give each child its own `open` prop. For single-select accordions, just have their `open` prop be `null`.
* 
* For some reason, accordions don't require a parent element, and don't have a roving tab index, but do implement keyboard navigation.
* 
* This makes their implementation a little bit messy. Each child individually handles keyboard navigation even though the parent component (but not element) orchestrates it.
* 
* @compositeParams
* 
* @hasChild {@link useAccordionSection}
*/
function useAccordion({ accordionParameters: { initialIndex, localStorageKey, orientation, ...accordionParameters }, typeaheadNavigationParameters: { collator, noTypeahead, onNavigateTypeahead, typeaheadTimeout, ...typeaheadNavigationParameters }, linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, onNavigateLinear, ...linearNavigationParameters }, managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange: ocmc1, onChildrenCountChange, ...managedChildrenParameters }, ...void1 }) {
	return useMonitoring(function useAccordion() {
		const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, initialIndex ?? null);
		if (localStorageIndex != null) initialIndex = localStorageIndex;
		const { managedChildrenReturn, context: { managedChildContext } } = useManagedChildren({ managedChildrenParameters: {
			onChildrenMountChange: useStableCallback((m, u) => {
				ocmc2(void 0);
				ocmc1?.(m, u);
			}),
			onAfterChildLayoutEffect,
			onChildrenCountChange,
			...managedChildrenParameters
		} });
		const { getChildren } = managedChildrenReturn;
		const isValidByChild = useCallback((c) => c && !c.disabled && !c.untabbable, []);
		const isValidByIndex = useCallback((c) => {
			const child = getChildren().getAt(c);
			if (child) return isValidByChild(child);
			return false;
		}, []);
		const { changeIndex: changeExpandedIndexLocalOnly, getCurrentIndex: getCurrentExpandedIndex } = useChildrenFlag({
			initialIndex,
			getChildren,
			getAt: useCallback((child) => {
				return child.getOpenFromParent() ?? false;
			}, []),
			setAt: useCallback((child, open) => {
				return child.setOpenFromParent(open);
			}, []),
			isValid: isValidByChild,
			onIndexChange: null,
			closestFit: false,
			onClosestFit: null,
			indexDemangler: identity
		});
		const { changeIndex: changeTabbedIndex, getCurrentIndex: getTabbedIndex, reevaluateClosestFit: ocmc2 } = useChildrenFlag({
			initialIndex,
			getChildren,
			getAt: useCallback((child) => {
				return child.getMostRecentlyTabbed() ?? false;
			}, []),
			setAt: useCallback((child, tabbed) => {
				return child.setMostRecentlyTabbed(tabbed);
			}, []),
			isValid: isValidByChild,
			closestFit: true,
			indexDemangler: identity,
			onIndexChange: useCallback((i) => {
				if (i != null) {
					const element = getChildren().getAt(i)?.getElement();
					if (element) getChildren().getAt(i)?.focusSelf(element);
				}
			}, []),
			onClosestFit: useStableCallback((index) => {
				const document = getDocument();
				if (document && (document.activeElement == null || document.activeElement == document.body)) {
					if (index != null) {
						let backupIndex = 0;
						let usedBackup = false;
						let element = getChildren().getAt(index)?.getElement();
						while (element == null && backupIndex <= getChildren().getHighestIndex()) {
							element = getChildren().getAt(backupIndex)?.getElement();
							++backupIndex;
							usedBackup = true;
						}
						if (usedBackup) findBackupFocus(element).focus();
						else if (element) getChildren().getAt(index)?.focusSelf(element);
					}
				}
			})
		});
		const changeExpandedIndex = useStableCallback((value, r) => {
			changeExpandedIndexLocalOnly(value, r);
			setLocalStorageIndex(value);
		});
		const rovingTabIndexReturn = useMemoObject({
			getTabbableIndex: getTabbedIndex,
			setTabbableIndex: changeTabbedIndex
		});
		const { context: { typeaheadNavigationContext }, typeaheadNavigationReturn, propsStable: propsTN, ...void2 } = useTypeaheadNavigation({
			rovingTabIndexReturn,
			typeaheadNavigationParameters: {
				isValidForTypeaheadNavigation: isValidByIndex,
				collator,
				noTypeahead,
				onNavigateTypeahead,
				typeaheadTimeout,
				...typeaheadNavigationParameters
			}
		});
		assertEmptyObject(accordionParameters);
		assertEmptyObject(linearNavigationParameters);
		assertEmptyObject(managedChildrenParameters);
		assertEmptyObject(typeaheadNavigationParameters);
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		return {
			typeaheadNavigationReturn,
			context: useMemoObject({
				managedChildContext,
				typeaheadNavigationContext,
				accordionSectionContext: useMemoObject({
					changeExpandedIndex,
					changeTabbedIndex,
					getExpandedIndex: getCurrentExpandedIndex,
					getTabbedIndex,
					stableTypeaheadProps: propsTN
				}),
				linearNavigationParameters: useMemoObject({
					getHighestIndex: useCallback(() => getChildren().getHighestIndex(), []),
					getLowestIndex: useCallback(() => getChildren().getLowestIndex(), []),
					indexMangler: identity,
					indexDemangler: identity,
					isValidForLinearNavigation: isValidByIndex,
					arrowKeyDirection: orientation ?? "vertical",
					disableHomeEndKeys,
					navigatePastEnd,
					navigatePastStart,
					pageNavigationSize,
					onNavigateLinear,
					...linearNavigationParameters
				}),
				rovingTabIndexReturn
			}),
			managedChildrenReturn,
			accordionReturn: useMemoObject({ changeExpandedIndex })
		};
	});
}
/**
* @compositeParams
*/
function useAccordionSection({ buttonParameters: { disabled, tagButton, onPressSync: userOnPress, ...buttonParameters }, accordionSectionParameters: { open: openFromUser, bodyRole, ...void3 }, info: { index, untabbable, ...void4 }, textContentParameters: { getText, onTextContentChange: otcc1, ...void5 }, context, refElementBodyParameters, refElementHeaderButtonParameters, pressParameters: { focusSelf, ...pressParameters }, ...void1 }) {
	return useMonitoring(function useAccordionSection() {
		const [openFromParent, setOpenFromParent, getOpenFromParent] = useState(null);
		const [mostRecentlyTabbed, setMostRecentlyTabbed, getMostRecentlyTabbed] = useState(null);
		const { accordionSectionContext: { changeExpandedIndex, changeTabbedIndex: setCurrentFocusedIndex, getTabbedIndex: getCurrentFocusedIndex, stableTypeaheadProps }, linearNavigationParameters, rovingTabIndexReturn } = context;
		const { randomIdReturn: _bodyIdReturn, propsSource: propsBodySource, propsReferencer: propsHeadReferencer } = useRandomId({ randomIdParameters: {
			prefix: Prefices.accordionSectionHeaderButton,
			otherReferencerProp: "aria-controls"
		} });
		const { randomIdReturn: _headIdReturn, propsSource: propsHeadSource, propsReferencer: propsBodyReferencer } = useRandomId({ randomIdParameters: {
			prefix: Prefices.accordionSectionBody,
			otherReferencerProp: "aria-labelledby"
		} });
		const open = openFromUser ?? openFromParent ?? false;
		const { refElementReturn: refElementBodyReturn, propsStable: bodyRefElementProps } = useRefElement({ refElementParameters: refElementBodyParameters });
		const { hasCurrentFocusReturn } = useHasCurrentFocus({
			refElementReturn: { getElement: useStableCallback(() => {
				return refElementHeaderButtonReturn.getElement();
			}) },
			hasCurrentFocusParameters: {
				onCurrentFocusedChanged: null,
				onCurrentFocusedInnerChanged: useStableCallback((focused, _prev) => {
					if (focused) {
						setCurrentFocusedIndex(index, void 0);
						setMostRecentlyTabbed(true);
					}
				})
			}
		});
		const { managedChildReturn: { getChildren: _getSections }, ...void9 } = useManagedChild({
			context,
			info: {
				index,
				disabled: disabled || false,
				focusSelf,
				getMostRecentlyTabbed,
				getOpenFromParent,
				untabbable,
				setMostRecentlyTabbed,
				setOpenFromParent,
				getElement: useStableCallback(() => {
					return refElementHeaderButtonReturn.getElement();
				})
			}
		});
		const { propsStable: propsLN, linearNavigationReturn, ...void10 } = useLinearNavigation({
			linearNavigationParameters,
			rovingTabIndexReturn,
			paginatedChildrenParameters: {
				paginationMin: null,
				paginationMax: null
			},
			processedIndexManglerReturn: {
				indexMangler: identity,
				indexDemangler: identity
			}
		});
		const { pressParameters: { excludeSpace, ...void11 }, textContentParameters: { onTextContentChange: otcc2, ...void13 }, ...void2 } = useTypeaheadNavigationChild({
			info: { index },
			context
		});
		const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {
			onElementChange: null,
			onMount: null,
			onUnmount: null
		} });
		const { textContentReturn } = useTextContent({
			refElementReturn,
			textContentParameters: {
				getText,
				onTextContentChange: useStableCallback((...a) => {
					otcc1?.(...a);
					otcc2?.(...a);
				})
			}
		});
		const { pressReturn, props, refElementReturn: refElementHeaderButtonReturn, ...void12 } = useButton({
			buttonParameters: {
				pressed: null,
				role: "button",
				disabled,
				tagButton,
				onPressSync: (e) => {
					setCurrentFocusedIndex(index, e);
					if (getOpenFromParent()) changeExpandedIndex(null, e);
					else changeExpandedIndex(index, e);
					userOnPress?.(e);
				},
				...buttonParameters
			},
			pressParameters: {
				excludeSpace,
				focusSelf,
				allowRepeatPresses: false,
				longPressThreshold: null,
				onPressingChange: null,
				...pressParameters
			},
			refElementParameters: refElementHeaderButtonParameters
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		assertEmptyObject(void4);
		assertEmptyObject(void5);
		assertEmptyObject(pressParameters);
		assertEmptyObject(buttonParameters);
		assertEmptyObject(void9);
		assertEmptyObject(void10);
		assertEmptyObject(void11);
		assertEmptyObject(void12);
		assertEmptyObject(void13);
		return {
			pressReturn,
			refElementBodyReturn,
			refElementHeaderButtonReturn,
			linearNavigationReturn,
			textContentReturn,
			hasCurrentFocusReturn,
			accordionSectionReturn: {
				mostRecentlyTabbed: !!mostRecentlyTabbed,
				expanded: open,
				focused: getCurrentFocusedIndex() == index
			},
			propsHeaderButton: useMergedProps(props, hasCurrentFocusReturn.propsStable, propsHeadReferencer, propsHeadSource, propsLN, stableTypeaheadProps, { "aria-expanded": open ?? false }),
			propsBody: useMergedProps(bodyRefElementProps, propsBodyReferencer, propsBodySource, {
				role: bodyRole,
				tabIndex: -1
			}),
			propsHeader: propsStable
		};
	});
}
// src/use-checkbox-group.ts
/**
* Allows a parent checkbox to control a number of child checkboxes, in accordance with the [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
* 
* @remarks `useCheckboxGroup` and its child hooks **do not** call `useCheckbox`. These hooks are for creating CheckboxGroup-like functionality&mdash;in theory, this could be implemented in a listbox.
* 
* A checkbox group is made up of the "Parent" checkbox and the "Child" checkboxes.  Of course, all of them are children of the group as a whole, but the "Parent" checkbox is the one that, when clicked, toggles the checked state of all the "Child" checkboxes.
* 
* A checkbox group's parent, when clicked, toggles between three states:
* ```md-literal
* * Unchecked (all children become unchecked)
* * Mixed (all children become the last user-input value)
* * Checked (all children become checked)
* ```
* 
* This functions even if it takes an `async` amount of time to complete the "cause the child checkbox to change its state" action.
* 
* @compositeParams
* 
* @hasChild {@link useCheckboxGroupParent}
* @hasChild {@link useCheckboxGroupChild}
*/
function useCheckboxGroup({ linearNavigationParameters, rovingTabIndexParameters, checkboxGroupParameters: { orientation, ...void2 }, multiSelectionParameters, refElementParameters, typeaheadNavigationParameters, processedIndexManglerParameters, ...void1 }) {
	return useMonitoring(function useCheckboxGroup() {
		const { context, linearNavigationReturn, managedChildrenReturn, props, rearrangeableChildrenReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, multiSelectionReturn, refElementReturn, ...void3 } = useCompleteListNavigation({
			linearNavigationParameters: {
				arrowKeyDirection: orientation,
				...linearNavigationParameters
			},
			rovingTabIndexParameters: {
				focusSelfParent: focus$1,
				...rovingTabIndexParameters
			},
			singleSelectionParameters: {
				initiallySingleSelectedIndex: null,
				onSingleSelectedIndexChange: null,
				singleSelectionAriaPropName: null,
				singleSelectionMode: "disabled"
			},
			paginatedChildrenParameters: {
				paginationMax: null,
				paginationMin: null
			},
			multiSelectionParameters,
			refElementParameters,
			typeaheadNavigationParameters,
			processedIndexManglerParameters
		});
		assertEmptyObject(void3);
		const { getChildren } = managedChildrenReturn;
		const children = getChildren();
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		const allIds = useRef(/* @__PURE__ */ new Set());
		const updateParentControlIds = useStableCallback((setter) => {
			setter?.(Array.from(allIds.current).join(" "));
		});
		const [getControlsSetterOnParentCheckbox, setControlsSetterOnParentCheckbox] = usePassiveState(updateParentControlIds, returnNull);
		const [_getUpdateIndex, setUpdateIndex] = usePassiveState(useStableCallback(() => {
			updateParentControlIds(getControlsSetterOnParentCheckbox());
		}), returnZero, { debounceRendering: setTimeout });
		const getSelfIsChecked = useCallback((percentChecked) => {
			return percentChecked <= 0 ? false : percentChecked >= 1 ? true : "mixed";
		}, []);
		const onAnyChildCheckedUpdate = useStableCallback((setter, percentChecked) => {
			setter?.(getSelfIsChecked(percentChecked));
		});
		const [getTotalChildren, setTotalChildren] = usePassiveState(useCallback((totalChildren) => {
			onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(getTotalChecked(), totalChildren));
		}, []), returnZero);
		const [getTotalChecked, setTotalChecked] = usePassiveState(useCallback((totalChecked) => {
			onAnyChildCheckedUpdate(getSetParentCheckboxChecked(), getPercentChecked(totalChecked, getTotalChildren()));
		}, []), returnZero);
		const getPercentChecked = useCallback((totalChecked, totalChildren) => {
			if (totalChildren > 0) return totalChecked / totalChildren;
			else return totalChecked == 0 ? 0 : 1;
		}, []);
		const [getSetParentCheckboxChecked, setSetParentCheckboxChecked] = usePassiveState(useStableCallback((setter) => {
			onAnyChildCheckedUpdate(setter, getPercentChecked(getTotalChecked(), getTotalChildren()));
		}));
		const onCheckboxGroupParentInput = useCallback(async (e) => {
			e.preventDefault();
			const selfIsChecked = getSelfIsChecked(getPercentChecked(getTotalChecked(), getTotalChildren()));
			const nextChecked = selfIsChecked === false ? "mixed" : selfIsChecked === "mixed" ? true : false;
			let willChangeAny = false;
			const promises = [];
			children.forEach((child) => {
				if (child.checkboxChildType == "child") willChangeAny ||= child.getChecked() != child.getLastUserChecked();
			});
			children.forEach((child) => {
				if (child.checkboxChildType == "child") {
					const prevChecked = child.getChecked();
					let checked;
					if (nextChecked == "mixed") {
						if (willChangeAny) checked = child.getLastUserChecked();
						else checked = true;
					} else checked = nextChecked;
					if (checked != prevChecked) {
						const promise = child.setCheckedFromParentInput(checked, e);
						if (promise) promises.push(promise);
					}
				}
			});
			await Promise.all(promises);
		}, []);
		return {
			refElementReturn,
			linearNavigationReturn,
			childrenHaveFocusReturn,
			context: useMemoObject({
				...context,
				checkboxGroupChildrenContext: useMemoObject({
					setUpdateIndex,
					allIds: allIds.current,
					setTotalChecked,
					setTotalChildren
				}),
				checkboxGroupParentContext: useMemoObject({
					setControlsSetterOnParentCheckbox,
					setSetParentCheckboxChecked,
					getPercentChecked,
					getTotalChecked,
					getTotalChildren,
					onCheckboxGroupParentInput
				})
			}),
			props,
			rearrangeableChildrenReturn,
			singleSelectionReturn,
			managedChildrenReturn,
			rovingTabIndexReturn,
			typeaheadNavigationReturn,
			multiSelectionReturn
		};
	});
}
/**
* Implements the logic for the parent checkbox (but not the checkbox itself).
* 
* @compositeParams
*/
function useCheckboxGroupParent({ context: { checkboxGroupParentContext: { setControlsSetterOnParentCheckbox, setSetParentCheckboxChecked, getPercentChecked, getTotalChecked, getTotalChildren, onCheckboxGroupParentInput }, ...context }, info, hasCurrentFocusParameters, refElementParameters, textContentParameters, multiSelectionChildParameters, singleSelectionChildParameters, ...void1 }) {
	return useMonitoring(function useCheckboxGroupParent() {
		const { hasCurrentFocusReturn, managedChildReturn, pressParameters, textContentReturn, refElementReturn, propsChild, propsTabbable, rovingTabIndexChildReturn, singleSelectionChildReturn, multiSelectionChildReturn, selectionChildReturn, ...void2 } = useCompleteListNavigationChild({
			context,
			hasCurrentFocusParameters,
			refElementParameters,
			info: {
				...info,
				checkboxChildType: "parent",
				getLastUserChecked: null,
				setCheckedFromParentInput: null,
				getChecked: null
			},
			textContentParameters,
			multiSelectionChildParameters,
			singleSelectionChildParameters
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		const [ariaControls, setControls] = useState("");
		useLayoutEffect(() => {
			setControlsSetterOnParentCheckbox(() => setControls, void 0);
		}, [setControls]);
		const [checked, setChecked] = useState(false);
		useEffect(() => {
			setSetParentCheckboxChecked(() => setChecked, void 0);
		}, []);
		return {
			checkboxGroupParentReturn: {
				checked,
				onParentCheckedChange: onCheckboxGroupParentInput,
				getPercent: useStableCallback(() => {
					return getPercentChecked(getTotalChecked(), getTotalChildren());
				})
			},
			hasCurrentFocusReturn,
			managedChildReturn,
			textContentReturn,
			refElementReturn,
			propsChild: useMergedProps({ "aria-controls": ariaControls }, propsChild),
			propsTabbable,
			rovingTabIndexChildReturn,
			singleSelectionChildReturn,
			pressParameters,
			selectionChildReturn,
			multiSelectionChildReturn
		};
	});
}
/**
* Implements the "child" part of a checkbox group.
* 
* @remarks Does not implement any actual "checkbox" functionality,
* but it does tell you what to do *with* a checkbox.
* 
* (That is to say, use `onChildCheckedChange` whenever
* your checkbox or checkbox-like thing changes, and
* properly implement `onChangeFromParent` to work
* properly when the parent changes)
* 
* @compositeParams
*/
function useCheckboxGroupChild({ checkboxGroupChildParameters, context, info: { focusSelf, index, untabbable, ...void3 }, textContentParameters, hasCurrentFocusParameters, refElementParameters, multiSelectionChildParameters: { multiSelectionDisabled, onMultiSelectChange, ...void5 }, ...void4 }) {
	return useMonitoring(function useCheckboxGroupChild() {
		const { checkboxGroupChildrenContext: { allIds, setUpdateIndex, setTotalChildren, setTotalChecked } } = context;
		const { checked, onChangeFromParent, ...void1 } = checkboxGroupChildParameters;
		const getChecked = useStableGetter(checked);
		const [getLastUserChecked, setLastUserChecked] = usePassiveState(null, returnFalse);
		const onChildCheckedChange = useStableCallback((checked) => {
			setLastUserChecked(checked, void 0);
		});
		const onControlIdChanged = useCallback((next, prev) => {
			if (prev) allIds.delete(prev);
			if (next) allIds.add(next);
			if (!!next || !!prev) setUpdateIndex((i) => (i ?? 0) + 1, void 0);
		}, []);
		useEffect(() => {
			setTotalChildren((c) => (c ?? 0) + 1, void 0);
			return () => setTotalChildren((c) => (c ?? 0) - 1, void 0);
		}, []);
		useEffect(() => {
			if (checked) {
				setTotalChecked((c) => (c ?? 0) + 1, void 0);
				return () => setTotalChecked((c) => (c ?? 0) - 1, void 0);
			}
		}, [checked]);
		const { hasCurrentFocusReturn, managedChildReturn, refElementReturn, textContentReturn, propsChild, propsTabbable, singleSelectionChildReturn: _singleSelectionChildReturn, rovingTabIndexChildReturn, pressParameters, multiSelectionChildReturn, selectionChildReturn, ...void2 } = useCompleteListNavigationChild({
			info: {
				checkboxChildType: "child",
				getLastUserChecked,
				getChecked,
				setCheckedFromParentInput: onChangeFromParent,
				focusSelf,
				index,
				untabbable
			},
			context,
			textContentParameters,
			hasCurrentFocusParameters,
			refElementParameters,
			singleSelectionChildParameters: { singleSelectionDisabled: true },
			multiSelectionChildParameters: {
				initiallyMultiSelected: !!checked,
				multiSelectionDisabled,
				onMultiSelectChange
			}
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		assertEmptyObject(void4);
		assertEmptyObject(void5);
		return {
			checkboxGroupChildReturn: {
				onChildCheckedChange,
				onControlIdChanged
			},
			textContentReturn,
			hasCurrentFocusReturn,
			managedChildReturn,
			refElementReturn,
			propsChild,
			propsTabbable,
			pressParameters,
			selectionChildReturn,
			rovingTabIndexChildReturn,
			multiSelectionChildReturn
		};
	});
}
// src/use-label.ts
/**
* @compositeParams
*/
function useLabel({ randomIdInputParameters, randomIdLabelParameters, labelParameters: { tagInput, tagLabel, ariaLabel, labelPosition, onLabelClick } }) {
	return useMonitoring$1(function useLabel() {
		const synthetic = !(tagInput == "input" && tagLabel == "label" && labelPosition != "wrapping");
		const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useRandomDualIds({
			randomIdInputParameters: {
				...randomIdInputParameters,
				otherReferencerProp: !synthetic && labelPosition === "separate" ? "for" : null
			},
			randomIdLabelParameters: {
				...randomIdLabelParameters,
				otherReferencerProp: synthetic ? "aria-labelledby" : null
			}
		});
		const { refElementReturn, propsStable: propsRef } = useRefElement({ refElementParameters: {} });
		if (labelPosition == "none") {
			propsInput["aria-label"] = ariaLabel;
			propsInput["aria-labelledby"] = void 0;
			propsLabel["for"] = void 0;
		}
		const { pressReturn, props: propsPress } = usePress({
			pressParameters: {
				excludeEnter: returnTrue,
				excludeSpace: returnTrue,
				onPressSync: onLabelClick,
				focusSelf: noop,
				allowRepeatPresses: false,
				excludePointer: null,
				longPressThreshold: null,
				onPressingChange: null
			},
			refElementReturn
		});
		return {
			pressReturn,
			propsInput,
			propsLabel: useMergedProps(propsLabel, propsRef, propsPress),
			randomIdInputReturn,
			randomIdLabelReturn
		};
	});
}
/**
* Shortcut for `useLabel` that assumes we're just never working with native HTML `input` and `label` elements. So for labelling guaranteably non-native elements.
* 
* @compositeParams
*/
function useLabelSynthetic({ labelParameters: { ariaLabel, onLabelClick }, ...rest }) {
	return useMonitoring$1(function useLabelSynthetic() {
		return useLabel({
			labelParameters: {
				ariaLabel,
				labelPosition: ariaLabel == null ? "separate" : "none",
				tagInput: "div",
				tagLabel: "div",
				onLabelClick
			},
			...rest
		});
	});
}
// src/use-checkbox-like.ts
function preventDefault(e) {
	e.preventDefault();
}
/**
* Handles any component that's "checkbox-like" (checkboxes, radios, switches, etc.)
* 
* @remarks Handles any component where there's:
* ```md-literal
* 1. Some kind of an on/off binary/trinary input element that needs event handlers
* 2. Some kind of label for that input element
* ```md-literal
* 
* See also `useLabel` for when there's a label for a non-checkbox-like component.
* 
* @compositeParams
*/
function useCheckboxLike({ labelParameters, randomIdInputParameters, randomIdLabelParameters, checkboxLikeParameters: { checked, disabled, role, ...void1 }, refElementInputReturn, refElementLabelReturn, pressParameters: { excludeSpace, longPressThreshold, onPressSync: onInputSync, ...void2 }, ...void3 }) {
	return useMonitoring$1(function useCheckboxLike() {
		const { getElement: getInputElement } = refElementInputReturn;
		const { getElement: getLabelElement } = refElementLabelReturn;
		const { tagInput, tagLabel, labelPosition } = labelParameters;
		useEffect(() => {
			const element = getInputElement();
			if (element && tagInput == "input") {
				element.indeterminate = checked === "mixed";
				element.checked = checked === true;
			}
		}, [tagInput, checked ?? false]);
		const { randomIdInputReturn, randomIdLabelReturn, propsInput, propsLabel, pressReturn } = useLabel({
			labelParameters: {
				...labelParameters,
				onLabelClick: useStableCallback((e) => {
					if (!disabled && tagInput != "input" && tagLabel != "label" && labelPosition != "separate") {
						focusSelf();
						onInputSync?.(e);
					}
				})
			},
			randomIdInputParameters,
			randomIdLabelParameters
		});
		const focusSelf = useStableCallback(() => {
			let elementToFocus = null;
			if (labelPosition == "wrapping") elementToFocus = getLabelElement();
			else elementToFocus = getInputElement();
			focus$1(elementToFocus);
		});
		const onClickInputSync = labelPosition == "wrapping" ? void 0 : onInputSync;
		const onClickLabelSync = onInputSync;
		const { pressReturn: pressInputReturn, props: propsPressInput } = usePress({
			pressParameters: {
				excludeSpace,
				allowRepeatPresses: false,
				excludeEnter: null,
				excludePointer: null,
				longPressThreshold,
				onPressingChange: null,
				focusSelf,
				onPressSync: disabled ? void 0 : onClickInputSync
			},
			refElementReturn: refElementInputReturn
		});
		const { pressReturn: pressLabelReturn, props: propsPressLabel } = usePress({
			pressParameters: {
				excludeSpace,
				allowRepeatPresses: false,
				excludeEnter: null,
				excludePointer: null,
				longPressThreshold,
				onPressingChange: null,
				focusSelf,
				onPressSync: disabled ? void 0 : onClickLabelSync
			},
			refElementReturn: refElementLabelReturn
		});
		const propsUnstableInput = {};
		const propsUnstableLabel = {};
		propsUnstableInput.onClick = preventDefault;
		propsUnstableLabel.onClick = preventDefault;
		propsUnstableInput.onInput = preventDefault;
		propsUnstableInput.onChange = preventDefault;
		propsUnstableInput.type = role == "radio" ? "radio" : "checkbox";
		switch (labelPosition) {
			case "none":
			case "separate":
				if (tagInput == "input") {
					propsUnstableInput.checked = checked === true;
					if (disabled === true || disabled === "hard") propsUnstableInput.disabled = true;
					else if (disabled == "soft") propsUnstableInput["aria-disabled"] = "true";
				} else {
					propsUnstableInput.role = role;
					propsUnstableInput.tabIndex = 0;
					propsUnstableInput["aria-checked"] = checked ?? false;
					propsUnstableInput["aria-disabled"] = !!disabled;
				}
				if (tagLabel != "label") {}
				break;
			case "wrapping":
				if (tagInput == "input") {
					propsUnstableInput.checked = checked === true;
					propsUnstableInput.disabled = disabled === true;
					propsUnstableInput.inert = true;
					propsUnstableInput.tabIndex = -1;
					propsUnstableInput.role = "presentation";
					propsUnstableInput["aria-hidden"] = "true";
					propsUnstableInput.onFocus = () => focus$1(getLabelElement?.());
				}
				propsUnstableLabel.role = role;
				propsUnstableLabel.tabIndex = 0;
				propsUnstableLabel["aria-checked"] = checked ?? false;
				propsUnstableLabel["aria-disabled"] = !!disabled;
		}
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		return {
			randomIdInputReturn,
			randomIdLabelReturn,
			pressInputReturn,
			pressLabelReturn,
			checkboxLikeInputReturn: { propsUnstable: propsUnstableInput },
			checkboxLikeLabelReturn: { propsUnstable: propsUnstableLabel },
			propsInput: useMergedProps(propsInput, propsUnstableInput, propsPressInput),
			propsLabel: useMergedProps(propsLabel, propsUnstableLabel, propsPressLabel),
			checkboxLikeReturn: { focusSelf },
			pressReturn
		};
	});
}
// src/use-checkbox.ts
/**
* Implements a [Checkbox](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/) pattern.
* 
* @compositeParams
*/
function useCheckbox({ checkboxLikeParameters: { checked, disabled, ...void2 }, checkboxParameters: { onCheckedChange, ...void4 }, labelParameters, pressParameters, ...void1 }) {
	return useMonitoring$1(function useCheckbox() {
		const { tagInput, labelPosition } = labelParameters;
		const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
		const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
		const { propsInput, propsLabel, checkboxLikeInputReturn, checkboxLikeLabelReturn, checkboxLikeReturn, pressInputReturn, pressLabelReturn, pressReturn, randomIdInputReturn, randomIdLabelReturn, ...void3 } = useCheckboxLike({
			randomIdInputParameters: { prefix: Prefices.checkboxLikeInput },
			randomIdLabelParameters: { prefix: Prefices.checkboxLikeLabel },
			refElementInputReturn,
			refElementLabelReturn,
			checkboxLikeParameters: {
				role: "checkbox",
				checked,
				disabled
			},
			pressParameters: {
				onPressSync: useStableCallback((e) => {
					onCheckedChange?.(enhanceEvent(e, {
						checked: !checked,
						previous: checked
					}));
				}),
				...pressParameters
			},
			labelParameters
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		assertEmptyObject(void4);
		return {
			checkboxReturn: { propsUnstable: { type: tagInput == "input" && labelPosition != "wrapping" ? "checkbox" : void 0 } },
			propsInput: useMergedProps(propsInput, propsRefInput),
			propsLabel: useMergedProps(propsLabel, propsRefLabel),
			checkboxLikeInputReturn,
			checkboxLikeLabelReturn,
			checkboxLikeReturn,
			pressInputReturn,
			pressLabelReturn,
			pressReturn,
			randomIdInputReturn,
			randomIdLabelReturn
		};
	});
}
// src/use-dialog.ts
/**
* Implements a [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/) pattern.
* 
* @compositeParams
*/
function useDialog({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, backdropDismissParameters, modalParameters, refElementParameters, labelParameters, ...void1 }) {
	return useMonitoring$1(function useDialog() {
		const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
			dismissParameters: {
				dismissActive: true,
				...dismissParameters
			},
			backdropDismissParameters: {
				onDismissBackdrop: null,
				...backdropDismissParameters
			},
			lostFocusDismissParameters: {
				onDismissLostFocus: null,
				dismissLostFocusActive: false
			},
			escapeDismissParameters: {
				onDismissEscape: null,
				...escapeDismissParameters
			},
			modalParameters,
			refElementParameters,
			activeElementParameters,
			focusTrapParameters: {
				trapActive: true,
				onlyMoveFocus: false,
				...focusTrapParameters
			}
		});
		const { propsInput, propsLabel, pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: useStableCallback(() => {
					const e = refElementPopupReturn.getElement();
					focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
				})
			},
			randomIdInputParameters: { prefix: Prefices.dialog },
			randomIdLabelParameters: { prefix: Prefices.dialogTitle }
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		return {
			propsFocusContainer,
			propsDialog: useMergedProps(propsStablePopup, propsInput),
			propsSource: { ...propsStableSource },
			propsTitle: propsLabel,
			pressReturn,
			refElementPopupReturn,
			refElementSourceReturn
		};
	});
}
// src/use-drawer.ts
/**
* Implements a drawer, which is a specific kind of [Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog/).
* 
* @compositeParams
*/
function useDrawer({ dismissParameters, escapeDismissParameters, focusTrapParameters, activeElementParameters, labelParameters, backdropDismissParameters, lostFocusDismissParameters, modalParameters, refElementParameters, ...void1 }) {
	return useMonitoring$1(function useDrawer() {
		const { propsFocusContainer, propsStablePopup, propsStableSource, refElementPopupReturn, refElementSourceReturn, ...void2 } = useModal({
			dismissParameters: {
				dismissActive: true,
				...dismissParameters
			},
			escapeDismissParameters: {
				onDismissEscape: null,
				...escapeDismissParameters
			},
			backdropDismissParameters: {
				onDismissBackdrop: null,
				...backdropDismissParameters
			},
			lostFocusDismissParameters: {
				onDismissLostFocus: null,
				...lostFocusDismissParameters
			},
			activeElementParameters,
			modalParameters,
			refElementParameters,
			focusTrapParameters: {
				onlyMoveFocus: false,
				...focusTrapParameters
			}
		});
		const { propsInput, propsLabel, pressReturn: _pressReturn, randomIdInputReturn: _randomIdInputReturn, randomIdLabelReturn: _randomIdLabelReturn, ...void3 } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: useStableCallback(() => {
					const e = refElementPopupReturn.getElement();
					focusTrapParameters.focusPopup(e, () => findFirstFocusable(e));
				})
			},
			randomIdInputParameters: { prefix: Prefices.drawer },
			randomIdLabelParameters: { prefix: Prefices.drawerTitle }
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		return {
			propsFocusContainer,
			propsDrawer: useMergedProps(propsStablePopup, propsInput),
			propsTitle: propsLabel,
			propsSource: { ...propsStableSource },
			refElementPopupReturn,
			refElementSourceReturn
		};
	});
}
// src/use-gridlist.ts
/**
* @compositeParams
*/
function useGridlist({ gridNavigationParameters, linearNavigationParameters, managedChildrenParameters, multiSelectionParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionDeclarativeParameters, labelParameters, randomIdInputParameters, randomIdLabelParameters, gridNavigationCompleteParameters, processedIndexManglerParameters, ...void1 }) {
	return useMonitoring(function useGridlist() {
		assertEmptyObject(void1);
		const { propsInput, propsLabel, ...labelSyntheticRet } = useLabelSynthetic({
			labelParameters,
			randomIdInputParameters,
			randomIdLabelParameters
		});
		const { context: contextRows, props, ...completeGridNavigationRet } = useCompleteGridNavigationDeclarative({
			gridNavigationParameters,
			linearNavigationParameters,
			multiSelectionParameters,
			paginatedChildrenParameters,
			refElementParameters,
			rovingTabIndexParameters,
			singleSelectionParameters,
			typeaheadNavigationParameters,
			singleSelectionDeclarativeParameters,
			gridNavigationCompleteParameters,
			processedIndexManglerParameters
		});
		const { context: contextProcessing, ...completeGridNavigationRowsRet } = useCompleteGridNavigationRows({
			context: contextRows,
			managedChildrenParameters,
			paginatedChildrenParameters,
			rearrangeableChildrenParameters,
			staggeredChildrenParameters
		});
		completeGridNavigationRet.rearrangeableChildrenReturn;
		completeGridNavigationRowsRet.rearrangeableChildrenReturn;
		return {
			...completeGridNavigationRet,
			...completeGridNavigationRowsRet,
			...labelSyntheticRet,
			props: useMergedProps(props, propsInput, {
				role: "grid",
				"aria-multiselectable": contextRows.multiSelectionContext.multiSelectionMode != "disabled" ? "true" : void 0
			}),
			propsLabel,
			contextChildren: contextRows,
			contextProcessing
		};
	});
}
/**
* @compositeParams
*/
function useGridlistRowOuter(p) {
	return useMonitoring(function useGridlistRowOuter() {
		let r = useCompleteGridNavigationRowOuter(p);
		r.props.role = "row";
		return r;
	});
}
/**
* @compositeParams
*/
function useGridlistRow(p) {
	return useMonitoring(function useGridlistRow() {
		if (p.context.multiSelectionContext.multiSelectionMode == "disabled") console.assert(p.multiSelectionChildDeclarativeParameters.multiSelected == null, `useGridlistRow: multiSelectionMode is disabled, but selected is ${p.multiSelectionChildDeclarativeParameters.multiSelected?.toString()} (instead of null).`);
		let r = useCompleteGridNavigationRowDeclarative(p);
		r.props.role = "row";
		return r;
	});
}
/**
* @compositeParams
*/
function useGridlistCell({ pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, excludeSpace, longPressThreshold, onPressSync, onPressingChange }, ...p }) {
	return useMonitoring(function useGridlistCell() {
		let { props, ...r } = useCompleteGridNavigationCell(p);
		const { pressReturn, props: propsPress } = usePress({
			pressParameters: {
				onPressSync,
				focusSelf: p.info.focusSelf,
				allowRepeatPresses,
				excludeEnter,
				excludePointer,
				excludeSpace: useStableCallback(() => r.pressParameters.excludeSpace?.() || excludeSpace?.() || false),
				longPressThreshold,
				onPressingChange
			},
			refElementReturn: r.refElementReturn
		});
		return {
			propsTabbable: props,
			propsCell: { role: "gridcell" },
			propsPress,
			pressReturn,
			...r
		};
	});
}
// src/use-listbox.ts
/**
* Implements a [Listbox](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/) pattern.
* 
* @remarks A listbox is a very limited widget and its items cannot contain interactive or non-text content.
* 
* @see {@link useGridlist} for a more capable list widget.
* 
* @compositeParams
* 
* @hasChild {@link useListboxItem}
*/
function useListbox({ labelParameters, listboxParameters: { groupingType, orientation }, linearNavigationParameters, singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode, ...void1 }, multiSelectionParameters: { multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, ...void2 }, singleSelectionDeclarativeParameters: { onSingleSelectedIndexChange, singleSelectedIndex, ...void3 }, rovingTabIndexParameters, ...restParams }) {
	return useMonitoring(function useListbox() {
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		const { propsInput: propsLabelList, propsLabel: propsLabelLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: useStableCallback(() => {
					rovingTabIndexReturn.focusSelf();
				})
			},
			randomIdInputParameters: { prefix: Prefices.listbox },
			randomIdLabelParameters: { prefix: Prefices.listboxLabel }
		});
		let { context, props: { ...props }, rovingTabIndexReturn, singleSelectionReturn: _singleSelectionReturn, ...restRet } = useCompleteListNavigationDeclarative({
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				focusSelfParent: focus$1
			},
			singleSelectionDeclarativeParameters: {
				onSingleSelectedIndexChange,
				singleSelectedIndex
			},
			singleSelectionParameters: {
				singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected",
				singleSelectionMode
			},
			linearNavigationParameters: {
				arrowKeyDirection: orientation,
				...linearNavigationParameters
			},
			multiSelectionParameters: {
				multiSelectionAriaPropName,
				multiSelectionMode,
				onSelectionChange
			},
			...restParams
		});
		if (groupingType == "group") props.role = "group";
		else if (groupingType == "with-groups") {
			props = { role: "listbox" };
			context = null;
		} else props.role = "listbox";
		return {
			...restRet,
			context,
			rovingTabIndexReturn,
			propsListbox: useMergedProps(props, propsLabelList, { "aria-multiselectable": multiSelectionMode != "disabled" ? true : void 0 }),
			propsListboxLabel: propsLabelLabel
		};
	});
}
/**
* @compositeParams
*/
function useListboxItem({ context, listboxParameters, pressParameters: { allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, ...void1 }, singleSelectionChildParameters: { singleSelectionDisabled }, ...restParams }) {
	return useMonitoring(function useListboxItem() {
		const { propsChild, propsTabbable, refElementReturn, pressParameters: { excludeSpace, ...void2 }, selectionChildReturn: { firePressSelectionEvent }, ...restRet } = useCompleteListNavigationChildDeclarative({
			context,
			singleSelectionChildParameters: { singleSelectionDisabled },
			...restParams
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(listboxParameters);
		propsChild.role = "option";
		propsChild["aria-disabled"] = singleSelectionDisabled ? "true" : void 0;
		const { pressReturn, props: propsPress } = usePress({
			refElementReturn,
			pressParameters: {
				onPressSync: firePressSelectionEvent,
				focusSelf: restParams.info.focusSelf,
				excludeSpace,
				allowRepeatPresses,
				excludeEnter,
				excludePointer,
				longPressThreshold,
				onPressingChange
			}
		});
		return {
			pressReturn,
			refElementReturn,
			props: useMergedProps(propsChild, propsTabbable, propsPress),
			...restRet
		};
	});
}
// src/use-menu-surface.ts
/**
* A menu surface is what handles user interaction with an interactive but transient surface (like a menu or a popup, but not something potentially modal like a dialog).
* 
* @remarks The keyboard (etc.) interactions are shared among a lot of widgets, and the opening button has some ARIA properties that need setting.
* 
* Related to **menus**, which are a **menubar** contained within a **menu surface**.
* 
* @compositeParams
*/
function useMenuSurface({ dismissParameters, focusTrapParameters, activeElementParameters, menuSurfaceParameters: { role, surfaceId, ...void1 }, modalParameters, escapeDismissParameters, ...void2 }) {
	return useMonitoring(function useMenuSurface() {
		const { refElementReturn: { getElement: getButtonElement }, propsStable: propsRefTrigger, ...void4 } = useRefElement({ refElementParameters: { onElementChange: void 0 } });
		const { refElementReturn: { getElement: getMenuElement, ...void5 }, propsStable: propsRefSurface, ...void6 } = useRefElement({ refElementParameters: { onElementChange: void 0 } });
		const { propsFocusContainer, propsStablePopup: propsPopup, propsStableSource: ps2, refElementPopupReturn, refElementSourceReturn } = useModal({
			dismissParameters: {
				dismissActive: true,
				...dismissParameters
			},
			backdropDismissParameters: {
				dismissBackdropActive: true,
				onDismissBackdrop: null
			},
			lostFocusDismissParameters: {
				dismissLostFocusActive: true,
				onDismissLostFocus: null
			},
			escapeDismissParameters: {
				dismissEscapeActive: true,
				onDismissEscape: null,
				...escapeDismissParameters
			},
			modalParameters,
			refElementParameters: {},
			activeElementParameters,
			focusTrapParameters: {
				onlyMoveFocus: true,
				trapActive: true,
				focusOpener: useStableCallback(() => {
					const buttonElement = getButtonElement();
					focus$1(buttonElement);
				}),
				...focusTrapParameters
			}
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void4);
		assertEmptyObject(void5);
		assertEmptyObject(void6);
		const propsSurface = useMergedProps(propsRefSurface, propsPopup, propsFocusContainer);
		const propsTarget = useMergedProps({
			role,
			id: surfaceId
		});
		const propsTrigger = useMergedProps({
			"aria-expanded": modalParameters.active,
			"aria-haspopup": role
		}, propsRefTrigger, ps2, { "aria-controls": surfaceId });
		return {
			propsSentinel: useFocusSentinel({ focusSentinel: {
				sendFocusToMenu: useStableCallback(() => {
					return focusTrapParameters.focusPopup(getMenuElement(), () => findFirstFocusable(getMenuElement()));
				}),
				onClose: useStableCallback((e) => {
					dismissParameters.onDismiss(e, "lost-focus");
				}),
				open: modalParameters.active
			} }),
			propsSurface,
			propsTarget,
			propsTrigger,
			refElementPopupReturn,
			refElementSourceReturn
		};
	});
}
/**
* A focus sentinel is a hidden but focusable element that comes at the start or end 
* of the out-of-place-focusable component that, when activated or focused over, closes the component
* (if focused within 100ms of the open prop changing, instead of
* closing, focusing the sentinel immediately asks it to focus itself).
* This exists for things like menus which can have focus but also need a way to return
* to whatever out-of-place parent they came from when naturally tabbed out of (as opposed
* to dialogs which loop back around when tabbed out of). While mouse users can click out of a menu
* and keyboard users can escape to close a menu, screen readers and other input methods 
* that don't use those two would become stuck.
* 
* @compositeParams
*/
function useFocusSentinel({ focusSentinel: { open, onClose, sendFocusToMenu } }) {
	return useMonitoring(function useFocusSentinel() {
		const getSendFocusWithinMenu = useStableGetter(sendFocusToMenu);
		const stableOnClose = useStableCallback(onClose);
		const [sentinelIsActive, setSentinelIsActive] = useState(false);
		useTimeout({
			callback: () => {
				setSentinelIsActive(open);
			},
			timeout: 100,
			triggerIndex: `${open}-${sentinelIsActive}`
		});
		const onFocus = sentinelIsActive ? ((e) => stableOnClose(e)) : (() => getSendFocusWithinMenu()?.());
		const onClick = (e) => stableOnClose(e);
		return {
			tabIndex: sentinelIsActive ? 0 : -1,
			onFocus,
			onClick
		};
	});
}
// src/use-toolbar.tsx
/**
* Implements a [Toolbar](https://www.w3.org/WAI/ARIA/apg/patterns/toolbar/) pattern, which is a collection of widgets in an expected order with a label (visible or hidden) and with the usual keyboard navigation stuff.
* 
* @remarks 
* The main difference between a toolbar and a menubar is that a menubar contains purely static menuitems, 
* but a toolbar is the more general case, being able to contain anything at all. 
* A menubar is implemented as a special case of a toolbar, and a menu is implemented as a specialized menubar.
* 
* Either way, be sure to specify the role and orientation this toolbar has (role=toolbar if you're using this as an actual toolbar).
* 
* @compositeParams
*/
function useToolbar({ linearNavigationParameters, toolbarParameters: { orientation, role, disabled }, labelParameters, rovingTabIndexParameters, singleSelectionParameters, singleSelectionDeclarativeParameters, ...listNavParameters }) {
	return useMonitoring(function useToolbar() {
		if (singleSelectionDeclarativeParameters.singleSelectedIndex !== void 0) console.assert(singleSelectionParameters.singleSelectionMode != "disabled", `useToolbar: When singleSelectionMode is "disabled", singleSelectedIndex must be null.`);
		const { context, props, ...listNavReturn } = useCompleteListNavigationDeclarative({
			...listNavParameters,
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				untabbable: disabled,
				focusSelfParent: focus$1
			},
			singleSelectionDeclarativeParameters,
			paginatedChildrenParameters: {
				paginationMax: null,
				paginationMin: null
			},
			linearNavigationParameters: {
				...linearNavigationParameters,
				arrowKeyDirection: orientation
			},
			singleSelectionParameters
		});
		const { propsInput: propsToolbar, propsLabel, randomIdInputReturn, randomIdLabelReturn } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: listNavReturn.rovingTabIndexReturn.focusSelf
			},
			randomIdInputParameters: { prefix: Prefices.toolbar },
			randomIdLabelParameters: { prefix: Prefices.toolbarLabel }
		});
		return {
			context: useMemoObject({
				...context,
				toolbarContext: useMemoObject({})
			}),
			propsLabel,
			propsToolbar: useMergedProps({
				...propsToolbar,
				role: role ?? void 0,
				tabIndex: disabled ? 0 : -1,
				"aria-disabled": disabled ? "true" : void 0
			}, props),
			randomIdInputReturn,
			randomIdLabelReturn,
			...listNavReturn
		};
	});
}
/**
* @compositeParams
*/
function useToolbarChild({ context, info, toolbarChildParameters: { disabledProp }, multiSelectionChildDeclarativeParameters, multiSelectionChildParameters: { multiSelectionDisabled }, ...args }) {
	return useMonitoring(function useToolbarChild() {
		const { propsChild, propsTabbable, ...listNavReturn } = useCompleteListNavigationChildDeclarative({
			info,
			context,
			multiSelectionChildDeclarativeParameters,
			multiSelectionChildParameters: { multiSelectionDisabled },
			...args
		});
		return {
			propsChild: useMergedProps(propsChild, { [disabledProp]: args.singleSelectionChildParameters.singleSelectionDisabled || multiSelectionDisabled ? true : void 0 }),
			propsTabbable,
			...listNavReturn
		};
	});
}
// src/use-menubar.ts
/**
* Implements a [Menubar](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) pattern.
* 
* @remarks A menubar is identical to a toolbar, except that every item 
* in a menubar is a menuitem (or similar) and has some sort of 
* role and action when pressed besides just single selection (if applicable).
* 
* (A toolbar child won't have a defined role, but every menubar child will)
* 
* @compositeParams
*/
function useMenubar(args) {
	return useMonitoring(function useMenubar() {
		const { propsToolbar: propsMenubar, ...restReturn } = useToolbar(args);
		return {
			propsMenubar,
			...restReturn
		};
	});
}
/**
* @compositeParams
*/
function useMenubarChild({ menuItemParameters: { onPress: opu, role }, pressParameters: { onPressingChange, ...void1 }, ...restParams }) {
	return useMonitoring(function useMenubarChild() {
		const focusSelf = useCallback((e) => focus$1(e), []);
		assertEmptyObject(void1);
		const { propsChild, propsTabbable, pressParameters: { excludeSpace }, selectionChildReturn: { firePressSelectionEvent }, ...restRet } = useToolbarChild({
			...restParams,
			toolbarChildParameters: { disabledProp: "aria-disabled" }
		});
		const { pressReturn, props: propsPress } = usePress({
			pressParameters: {
				focusSelf,
				excludeSpace,
				onPressSync: useStableCallback((e) => {
					firePressSelectionEvent(e);
					opu?.(e);
				}),
				allowRepeatPresses: false,
				excludeEnter: returnFalse,
				excludePointer: returnFalse,
				longPressThreshold: null,
				onPressingChange
			},
			refElementReturn: restRet.refElementReturn
		});
		propsChild.role = role;
		return {
			props: useMergedProps(propsChild, propsTabbable, propsPress),
			pressReturn,
			...restRet
		};
	});
}
// src/use-menu.ts
/**
* Implements the [Menu](https://www.w3.org/WAI/ARIA/apg/patterns/menubar/) and [Menu Button](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/) patterns.
* 
* @remarks A menu is a specialization of a menubar (something that handles navigation among a set of menuitems) 
* and a menu surface (something that handles moving focus to/from an unrelated area of the page).
* 
* Additionally, pressing the arrow key that corresponds to the direction that the menu opens
* in will open it.
* 
* @compositeParams 
*/
function useMenu({ dismissParameters, escapeDismissParameters, menuParameters: { openDirection, onOpen }, menuSurfaceParameters, activeElementParameters, toolbarParameters, modalParameters, ...restParams }) {
	return useMonitoring(function useMenu() {
		const { context, propsLabel: propsButtonAsMenuLabel, propsMenubar, randomIdInputReturn, rovingTabIndexReturn, ...restRet } = useMenubar({
			toolbarParameters: {
				role: "menu",
				...toolbarParameters
			},
			labelParameters: { ariaLabel: null },
			...restParams
		});
		const onKeyDown = useStableCallback((e) => {
			if (!modalParameters.active) switch (e.key) {
				case "ArrowUp":
					if (openDirection == "up") {
						onOpen();
						e.preventDefault();
						e.stopPropagation();
					}
					break;
				case "ArrowDown":
					if (openDirection == "down") {
						onOpen();
						e.preventDefault();
						e.stopPropagation();
					}
					break;
				case "ArrowLeft":
					if (openDirection == "left") {
						onOpen();
						e.preventDefault();
						e.stopPropagation();
					}
					break;
				case "ArrowRight": if (openDirection == "right") {
					onOpen();
					e.preventDefault();
					e.stopPropagation();
				}
			}
		});
		const { propsTarget, propsTrigger, refElementSourceReturn, ...restRet2 } = useMenuSurface({
			menuSurfaceParameters: {
				...menuSurfaceParameters,
				surfaceId: randomIdInputReturn.id,
				role: "menu"
			},
			escapeDismissParameters,
			modalParameters,
			dismissParameters,
			activeElementParameters,
			focusTrapParameters: { focusPopup: () => {
				rovingTabIndexReturn.focusSelf();
			} }
		});
		return {
			...restRet,
			...restRet2,
			context: useMemoObject({
				...context,
				menu: useMemoObject({ closeFromMenuItemClicked: useStableCallback((e) => {
					dismissParameters.onDismiss(e, "item-clicked");
				}) })
			}),
			refElementSourceReturn,
			rovingTabIndexReturn,
			randomIdInputReturn,
			propsTarget: useMergedProps(propsTarget, propsMenubar),
			propsTrigger: useMergedProps({ onKeyDown }, propsTrigger, propsButtonAsMenuLabel)
		};
	});
}
/**
* @compositeParams
*/
function useMenuItem(p) {
	return useMonitoring(function useMenuItem() {
		return {
			...useMenubarChild(p),
			menuItemReturn: { closeMenu: p.context.menu.closeFromMenuItemClicked }
		};
	});
}
// src/use-notify.tsx
const NotificationProviderContext = createContext(null);
/**
* Allows children to send notifications to a screen reader or other assistive technology.
* 
* Please note that because some devices only check for `aria-live` regions *once* on page load,
* they cannot be created dynamically. You must pass the ID of the **already-existing** elements to use (or the elements themselves).
* 
* One *must* have `aria-live=polite` and one *must* have `aria-live=assertive`, but there aren't really any other requirements. 
* They shouldn't be visible, I suppose.
* 
* @compositeParams
* 
* @hasChild {@link useNotify}
*/
function useNotificationProvider({ targetAssertive, targetPolite }) {
	return useMonitoring(function useNotificationProvider() {
		const { children: childrenPolite, pushChild: notifyPolite, portalElement: politeElement } = usePortalChildren({ target: targetPolite });
		const { children: childrenAssertive, pushChild: notifyAssertive, portalElement: assertiveElement } = usePortalChildren({ target: targetAssertive });
		if (typeof window !== "undefined") {
			console.assert(politeElement != null, `useNotificationProvider: targetPolite is missing`);
			console.assert(assertiveElement != null, `useNotificationProvider: targetAssertive is missing`);
			if (politeElement) console.assert(politeElement.getAttribute("aria-live") == "polite", `useNotificationProvider: targetPolite missing attribute "aria-live=polite"`);
			if (assertiveElement) console.assert(assertiveElement.getAttribute("aria-live") == "assertive", `useNotificationProvider: targetAssertive is missing, or missing "aria-live=assertive"`);
		}
		const notify = useCallback((mode, child) => {
			return mode == "assertive" ? notifyAssertive(child) : notifyPolite(child);
		}, [notifyAssertive, notifyPolite]);
		return {
			notify,
			context: useMemo(() => ({ notify }), [notify]),
			children: /* @__PURE__ */ jsxs(Fragment, { children: [childrenPolite, childrenAssertive] })
		};
	});
}
function useNotify() {
	return useContextWithWarning(NotificationProviderContext, "notification provider").notify;
}
// src/use-progress.tsx
/**
* Provides the attributes and roles for a progress bar.
* 
* @compositeParams
*/
function useProgress({ labelParameters, progressIndicatorParameters: { max, value, valueText, tagProgressIndicator, ...void1 }, ...void2 }) {
	return useMonitoring(function useProgress() {
		const { propsInput, propsLabel, randomIdInputReturn, randomIdLabelReturn, pressReturn, ...void3 } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: null
			},
			randomIdInputParameters: { prefix: Prefices.progressIndicator },
			randomIdLabelParameters: { prefix: Prefices.progressLabel }
		});
		propsInput.tabIndex = -1;
		const busy = value && value != "disabled";
		const disabled = value == "disabled";
		if (typeof value != "number") {
			value = null;
			max ??= 100;
		}
		const indicatorProps = tagProgressIndicator === "progress" ? {
			max,
			value: value ?? void 0,
			"aria-valuemin": 0,
			"aria-valuenow": value == null ? void 0 : value
		} : {
			"aria-valuemin": 0,
			"aria-valuemax": max == null ? void 0 : max,
			"aria-valuetext": valueText == null ? void 0 : `${valueText}`,
			"aria-valuenow": value == null ? void 0 : value,
			role: "progressbar"
		};
		if (disabled) indicatorProps["aria-hidden"] = true;
		const labelProps = { "aria-hidden": !busy ? "true" : void 0 };
		const regionProps = {
			"aria-busy": !!busy,
			"aria-describedby": randomIdInputReturn.id
		};
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		return {
			propsProgressIndicator: useMergedProps(indicatorProps, propsInput),
			propsProgressLabel: useMergedProps(labelProps, propsLabel),
			propsProgressRegion: regionProps,
			randomIdInputReturn,
			randomIdLabelReturn,
			pressReturn
		};
	});
}
/**
* Provides props for a progress bar based on the progress of an async event handler, and notifies ATs when the operation has started/finished.
* 
* @remarks This hook is meant to be combined with other hooks, generally wrapping around the other hook.
* You don't actually need an entire progress bar element as long as your `notify*` parameters are good.
* 
* @compositeParams
*/
function useProgressWithHandler({ labelParameters, progressIndicatorParameters, asyncHandlerParameters: { asyncHandler, ...asyncHandlerParameters }, progressWithHandlerParameters: { forciblyPending, notifyFailure, notifyPending, notifySuccess, ...void1 }, ...void2 }) {
	return useMonitoring(function useProgressWithHandler() {
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		const notify = useNotify();
		const asyncInfo = useAsyncHandler({
			...asyncHandlerParameters,
			asyncHandler: (...args) => {
				try {
					let promiseOrValue = asyncHandler?.(...args);
					if (promiseOrValue && "then" in promiseOrValue) {
						if (notifyPending) notify("assertive", notifyPending);
						return promiseOrValue.then((value) => {
							if (notifySuccess) notify("assertive", notifySuccess);
							return value;
						});
					}
					return promiseOrValue;
				} catch (ex) {
					if (notifyFailure) notify("assertive", notifyFailure);
					throw ex;
				}
			}
		});
		const { propsProgressIndicator, propsProgressLabel, propsProgressRegion } = useProgress({
			labelParameters,
			progressIndicatorParameters: {
				max: 1,
				value: forciblyPending || asyncInfo.pending ? "indeterminate" : "disabled",
				valueText: null,
				...progressIndicatorParameters
			}
		});
		return {
			propsProgressIndicator,
			propsProgressLabel,
			propsProgressRegion,
			asyncHandlerReturn: asyncInfo
		};
	});
}
// src/use-radio-group.tsx
/**
* Implements a [Radio Group](https://www.w3.org/WAI/ARIA/apg/patterns/radio/) pattern.
* 
* @remarks Which radio is the selected one is controlled by the `selectedValue` parameter on the parent.
* 
* @compositeParams
* 
* @hasChild {@link useRadio}
*/
function useRadioGroup({ labelParameters, radioGroupParameters: { name, selectedValue, onSelectedValueChange, ...void2 }, rovingTabIndexParameters, linearNavigationParameters, typeaheadNavigationParameters, refElementParameters, singleSelectionParameters: { singleSelectionMode, ...void4 }, processedIndexManglerParameters, ...void1 }) {
	return useMonitoring(function useRadioGroup() {
		const [selectedIndex, setSelectedIndex] = useState(null);
		const nameToIndex = useRef(/* @__PURE__ */ new Map());
		const indexToName = useRef(/* @__PURE__ */ new Map());
		useEffect(() => {
			setSelectedIndex(nameToIndex.current.get(selectedValue) ?? null);
		}, [selectedValue]);
		const { propsInput: propsGroup1, propsLabel } = useLabelSynthetic({
			labelParameters: {
				onLabelClick: useStableCallback(() => {
					rovingTabIndexReturn.focusSelf();
				}),
				...labelParameters
			},
			randomIdLabelParameters: { prefix: Prefices.radioGroupLabel },
			randomIdInputParameters: { prefix: Prefices.radioGroup }
		});
		const { context, props: propsGroup2, singleSelectionReturn, multiSelectionReturn: _multiSelectionReturn, managedChildrenReturn, rovingTabIndexReturn, linearNavigationReturn, rearrangeableChildrenReturn, typeaheadNavigationReturn, childrenHaveFocusReturn, refElementReturn, ...void3 } = useCompleteListNavigationDeclarative({
			singleSelectionDeclarativeParameters: {
				singleSelectedIndex: selectedIndex,
				onSingleSelectedIndexChange: useStableCallback((e) => {
					setSelectedIndex(e[EventDetail$1].selectedIndex);
					onSelectedValueChange?.(enhanceEvent$1(e, { selectedValue: indexToName.current.get(e[EventDetail$1].selectedIndex) }));
				})
			},
			singleSelectionParameters: {
				singleSelectionMode,
				singleSelectionAriaPropName: null
			},
			multiSelectionParameters: {
				multiSelectionMode: "disabled",
				multiSelectionAriaPropName: null,
				onSelectionChange: null
			},
			paginatedChildrenParameters: {
				paginationMin: null,
				paginationMax: null
			},
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				focusSelfParent: focus$1
			},
			linearNavigationParameters,
			typeaheadNavigationParameters,
			refElementParameters,
			processedIndexManglerParameters
		});
		const propsRadioGroup = useMergedProps(propsGroup1, propsGroup2, { role: "radiogroup" });
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		assertEmptyObject(void4);
		return {
			propsRadioGroup,
			propsRadioGroupLabel: propsLabel,
			rovingTabIndexReturn,
			linearNavigationReturn,
			refElementReturn,
			managedChildrenReturn,
			radioGroupReturn: { selectedIndex },
			singleSelectionReturn,
			rearrangeableChildrenReturn,
			typeaheadNavigationReturn,
			childrenHaveFocusReturn,
			context: useMemo(() => ({
				...context,
				radioContext: {
					name,
					indexToName: indexToName.current,
					nameToIndex: nameToIndex.current
				}
			}), [name])
		};
	});
}
/**
* Implements a single radio button, as part of a radio group.
* 
* @compositeParams
*/
function useRadio({ radioParameters: { value, ...void5 }, checkboxLikeParameters: { disabled, ...void4 }, labelParameters, info, context, textContentParameters, pressParameters: { longPressThreshold, ...void3 }, hasCurrentFocusParameters, refElementParameters, ...void1 }) {
	return useMonitoring(function useRadio() {
		const index = info.index;
		const { name, indexToName, nameToIndex } = context.radioContext;
		const { tagInput, labelPosition } = labelParameters;
		const { pressParameters: { excludeSpace }, selectionChildReturn: { firePressSelectionEvent }, singleSelectionChildReturn, propsTabbable, propsChild: listNavigationSingleSelectionChildProps, ...listNavRet } = useCompleteListNavigationChildDeclarative({
			info: {
				focusSelf: useStableCallback((_e) => {
					return checkboxLikeRet.checkboxLikeReturn.focusSelf();
				}),
				...info
			},
			context,
			textContentParameters,
			hasCurrentFocusParameters,
			refElementParameters,
			singleSelectionChildParameters: { singleSelectionDisabled: !!disabled },
			multiSelectionChildParameters: { multiSelectionDisabled: true },
			multiSelectionChildDeclarativeParameters: {
				multiSelected: null,
				onMultiSelectedChange: null
			}
		});
		assertEmptyObject(void1);
		assertEmptyObject(void3);
		assertEmptyObject(void4);
		assertEmptyObject(void5);
		const { singleSelected: checked } = singleSelectionChildReturn;
		const { refElementReturn: refElementInputReturn, propsStable: propsRefInput } = useRefElement({ refElementParameters: {} });
		const { refElementReturn: refElementLabelReturn, propsStable: propsRefLabel } = useRefElement({ refElementParameters: {} });
		const { propsInput, propsLabel, ...checkboxLikeRet } = useCheckboxLike({
			checkboxLikeParameters: {
				checked: checked ?? false,
				disabled,
				role: "radio"
			},
			pressParameters: {
				excludeSpace,
				longPressThreshold,
				onPressSync: firePressSelectionEvent
			},
			labelParameters,
			randomIdInputParameters: { prefix: Prefices.radio },
			randomIdLabelParameters: { prefix: Prefices.radioLabel },
			refElementInputReturn,
			refElementLabelReturn
		});
		useLayoutEffect(() => {
			nameToIndex.set(value, index);
			indexToName.set(index, value);
			return () => {
				nameToIndex.delete(value);
				indexToName.delete(index);
			};
		}, [value, index]);
		if (tagInput == "input") {
			propsInput.name = name;
			propsInput.checked = checked ?? false;
			propsInput.type = "radio";
		} else propsInput["aria-checked"] = checked ?? false;
		const propsIfInputHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsInput);
		const propsInput2 = useMergedProps(propsRefInput, labelPosition != "wrapping" ? propsIfInputHandlesFocus : propsInput);
		const propsIfLabelHandlesFocus = useMergedProps(listNavigationSingleSelectionChildProps, propsTabbable, propsLabel);
		return {
			propsInput: propsInput2,
			propsLabel: useMergedProps(propsRefLabel, labelPosition == "wrapping" ? propsIfLabelHandlesFocus : propsLabel),
			singleSelectionChildReturn,
			...checkboxLikeRet,
			...listNavRet
		};
	});
}
// src/use-slider.tsx
/**
* Implements a [Slider](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/) pattern.
* 
* @compositeParams
* 
* @hasChild {@link useSliderThumb}
*/
function useSlider({ sliderParameters: { max, min }, managedChildrenParameters }) {
	const { context, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
	const baseIdRef = useRef(null);
	if (baseIdRef.current === null) baseIdRef.current = generateRandomId(Prefices.sliderThumb);
	return {
		context: useMemo(() => ({
			...context,
			sliderContext: {
				min,
				max,
				baseId: baseIdRef.current
			}
		}), [min, max]),
		managedChildrenReturn
	};
}
/**
* @compositeParams
*/
function useSliderThumb({ sliderThumbParameters: { tag, value, max: maxOverride, min: minOverride, valueText, label, onValueChange, ...void2 }, info, context: { sliderContext: { max: maxParent, min: minParent }, ...context }, ...void1 }) {
	return useMonitoring(function useSliderThumb() {
		const { managedChildReturn } = useManagedChild({
			info,
			context
		});
		const { getChildren: _getThumbs } = managedChildReturn;
		const min = minOverride ?? minParent;
		const max = maxOverride ?? maxParent;
		let newProps = tag == "input" ? {
			min,
			max,
			value,
			type: "range"
		} : {
			"aria-valuemax": max,
			"aria-valuemin": min,
			"aria-valuenow": value
		};
		newProps = {
			...newProps,
			"aria-label": label,
			"aria-valuetext": valueText ?? void 0,
			style: {
				"--range-value": `${value}`,
				"--range-value-text": `${valueText}`
			}
		};
		if (tag == "input") newProps.onInput = (e) => {
			onValueChange?.(enhanceEvent$1(e, { value: e.currentTarget.valueAsNumber }));
		};
		else throw new Error("Unimplemented");
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		return {
			sliderThumbReturn: {
				min,
				max
			},
			managedChildReturn,
			propsSliderThumb: newProps
		};
	});
}
// src/use-table.ts
/**
* @compositeParams
*/
function useTable({ gridNavigationParameters, linearNavigationParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, labelParameters, tableParameters: { tagTable, initiallySortedColumn }, gridNavigationCompleteParameters: { getSortValueAt }, processedIndexManglerParameters }) {
	return useMonitoring(function useTable() {
		const [getRefreshRows, setRefreshRows] = usePassiveState(null, returnNull);
		const [_sortDirection, setSortDirection, getSortDirection] = useState("ascending");
		const [_sortColumn, setSortColumn, getSortColumn] = useState(initiallySortedColumn ?? void 0);
		const sortByColumn = useCallback((column) => {
			let nextSortDirection = getSortDirection();
			let nextSortIndex = getSortColumn();
			if (column == nextSortIndex) setSortDirection(nextSortDirection = nextSortDirection == "ascending" ? "descending" : "ascending");
			else setSortColumn(nextSortIndex = column);
			const sortBody = getRefreshRows();
			console.assert(!!sortBody);
			if (!sortBody) {
				debugger;
				console.error("An attempt was made to sort a table with a head but no body");
			} else sortBody();
			return {
				column: nextSortIndex,
				direction: nextSortDirection
			};
		}, []);
		const { propsInput: propsLabelTable, propsLabel: propsLabelLabel } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: null
			},
			randomIdInputParameters: { prefix: Prefices.table },
			randomIdLabelParameters: { prefix: Prefices.tableLabel }
		});
		const { props, context, ...completeGridNavigationReturn } = useCompleteGridNavigation({
			gridNavigationParameters,
			linearNavigationParameters,
			multiSelectionParameters,
			paginatedChildrenParameters,
			refElementParameters,
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				focusSelfParent: focus
			},
			singleSelectionParameters,
			typeaheadNavigationParameters,
			gridNavigationCompleteParameters: {
				getSortColumn,
				getSortValueAt
			},
			processedIndexManglerParameters
		});
		const tableContext = useMemoObject({
			setRefreshRowsFunction: setRefreshRows,
			getCurrentSortColumn: getSortColumn,
			getCurrentSortDirection: getSortDirection,
			sortByColumn
		});
		return {
			propsTable: useMergedProps(props, propsLabelTable, {
				role: tagTable == "table" ? void 0 : "grid",
				"aria-multiselectable": multiSelectionParameters.multiSelectionMode != "disabled" ? "true" : void 0
			}),
			propsLabel: propsLabelLabel,
			tableReturn: { sortByColumn },
			context: useMemoObject({
				tableContext,
				...context
			}),
			...completeGridNavigationReturn
		};
	});
}
const naturalSectionTypes = /* @__PURE__ */ new Set([
	"thead",
	"tbody",
	"tfoot"
]);
/**
* @compositeParams
*/
function useTableHead({ tableHeadParameters: { tagHead: tagTableSection } }) {
	const props = {};
	if (!naturalSectionTypes.has(tagTableSection)) props.role = "rowgroup";
	return {
		props,
		tableHeadReturn: {}
	};
}
/**
* @compositeParams
*/
function useTableBody({ context: processedChildrenContext, managedChildrenParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, tableSectionParameters: { tagTableSection } }) {
	return useMonitoring(function useTableBody() {
		const props = {};
		const { context: contextRows, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useCompleteGridNavigationRows({
			context: processedChildrenContext,
			managedChildrenParameters,
			paginatedChildrenParameters,
			rearrangeableChildrenParameters,
			staggeredChildrenParameters
		});
		if (!naturalSectionTypes.has(tagTableSection)) props.role = "rowgroup";
		useEffect(() => {
			processedChildrenContext.tableContext.setRefreshRowsFunction(() => {
				return () => {
					rearrangeableChildrenReturn.refresh();
				};
			});
		});
		return {
			context: useMemoObject({
				...contextRows,
				tableProcessedChildren: useMemoObject({ location: "body" })
			}),
			rearrangeableChildrenReturn,
			paginatedChildrenReturn,
			staggeredChildrenReturn,
			propsTableSection: props
		};
	});
}
/**
* @compositeParams
*/
function useTableRowOuter({ context, info: { ...info }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters, ...void1 }) {
	return useMonitoring(function useTableRowOuter() {
		assertEmptyObject(void1);
		const {} = context;
		const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {
			onElementChange: useStableCallback((...a) => {
				oec1?.(...a);
				oec2?.(...a);
			}),
			onMount,
			onUnmount
		} });
		const { props, ...processedChildReturn } = useProcessedChild({
			context,
			info: {
				getElement: refElementReturn.getElement,
				...info
			},
			rearrangeableChildParameters
		});
		const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect }, refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
		return {
			...processedChildReturn,
			refElementReturn,
			props: useMergedProps(props, propsStable),
			hide: hideBecausePaginated || hideBecauseStaggered
		};
	});
}
/**
* @compositeParams
*/
function useTableRow({ info, textContentParameters, context: cx1, tableRowParameters: { selected }, linearNavigationParameters, rovingTabIndexParameters, hasCurrentFocusParameters, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
	return useMonitoring(function useTableRow() {
		assertEmptyObject(void1);
		const { context: cx2, managedChildrenReturn, props: { ...props }, ...restRet } = useCompleteGridNavigationRow({
			textContentParameters,
			hasCurrentFocusParameters,
			context: { ...cx1 },
			info,
			linearNavigationParameters,
			rovingTabIndexParameters,
			singleSelectionChildParameters,
			multiSelectionChildParameters,
			refElementParameters,
			typeaheadNavigationParameters: {
				noTypeahead: true,
				collator: null,
				typeaheadTimeout: Infinity,
				onNavigateTypeahead: null
			}
		});
		props.role = "row";
		if (selected) switch (cx1.singleSelectionContext.singleSelectionAriaPropName) {
			case "aria-checked":
			case "aria-pressed":
			case "aria-selected":
				props[cx1.singleSelectionContext.singleSelectionAriaPropName ?? "aria-selected"] = "true";
				break;
			default: console.assert(false, cx1.singleSelectionContext.singleSelectionAriaPropName + " is not valid for multi-select -- prefer checked, selected, or pressed");
		}
		return {
			context: useMemoObject({
				...cx2,
				tableContext: cx1.tableContext
			}),
			props,
			managedChildrenReturn,
			...restRet
		};
	});
}
/**
* @compositeParams
*/
function useTableCell({ tableCellParameters: { tagTableCell }, info, context, gridNavigationCellParameters, textContentParameters, ...p }) {
	return useMonitoring(function useTableCell() {
		assertEmptyObject(p);
		const { props, ...ret } = useCompleteGridNavigationCell({
			info,
			context,
			gridNavigationCellParameters,
			textContentParameters
		});
		return {
			propsFocus: props,
			propsCell: { role: tagTableCell != "th" && tagTableCell != "td" ? "gridcell" : void 0 },
			...ret,
			tableCellReturn: { sortByThisColumn: useStableCallback(() => {
				return context.tableContext.sortByColumn(info.index);
			}, []) }
		};
	});
}
// src/use-tabs.ts
/**
* Implements a [Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/) pattern.
* 
* @remarks Tabs consist of both a list of tabs and a list of tab panels. 
* A Tab and a TabPanel that share the same index are linked together; when that tab is selected that panel is shown.
* 
* @compositeParams
* 
* @hasChild {@link useTab}
* @hasChild {@link useTabPanel}
*/
function useTabs({ labelParameters, linearNavigationParameters, singleSelectionParameters: { initiallySingleSelectedIndex, onSingleSelectedIndexChange: ssi, singleSelectionMode, ...singleSelectionParameters }, tabsParameters: { orientation, role, localStorageKey }, rovingTabIndexParameters, ...restParams }) {
	return useMonitoring(function useTabs() {
		const [localStorageIndex, setLocalStorageIndex] = usePersistentState(localStorageKey ?? null, 0);
		if (localStorageIndex != null) initiallySingleSelectedIndex = localStorageIndex;
		const baseId = generateRandomId("aria-tabs-");
		const getTabId = useCallback((index) => {
			return baseId + "-tab-" + index;
		}, []);
		const getPanelId = useCallback((index) => {
			return baseId + "-panel-" + index;
		}, []);
		const { context: managedChildContext, managedChildrenReturn: panelChildrenReturn } = useManagedChildren({ managedChildrenParameters: { onChildrenMountChange: useStableCallback((_m, _u) => {
			reevaluateClosestFit(void 0);
		}) } });
		const { changeIndex: changeVisiblePanel, getCurrentIndex: getVisibleIndex, reevaluateClosestFit } = useChildrenFlag({
			getChildren: panelChildrenReturn.getChildren,
			closestFit: false,
			onClosestFit: null,
			initialIndex: null,
			getAt: useStableCallback((i) => {
				return i.getVisible() ?? false;
			}, []),
			setAt: useStableCallback((i, b, n, p) => {
				return i.setVisibleIndex(n, p);
			}, []),
			isValid: returnTrue,
			onIndexChange: null,
			indexDemangler: identity$1
		});
		useLayoutEffect(() => {
			changeVisiblePanel(initiallySingleSelectedIndex ?? null, void 0);
		}, []);
		const { propsInput, propsLabel, randomIdInputReturn: { id: _inputId }, randomIdLabelReturn: { id: _labelId } } = useLabelSynthetic({
			labelParameters: {
				...labelParameters,
				onLabelClick: useStableCallback(() => listNavRet1.rovingTabIndexReturn.focusSelf())
			},
			randomIdInputParameters: { prefix: Prefices.tablist },
			randomIdLabelParameters: { prefix: Prefices.tablistLabel }
		});
		const { props: listNavigationSingleSelectionProps, context, ...listNavRet1 } = useCompleteListNavigation({
			linearNavigationParameters: {
				arrowKeyDirection: orientation,
				...linearNavigationParameters
			},
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				focusSelfParent: focus$1
			},
			singleSelectionParameters: {
				onSingleSelectedIndexChange: useStableCallback((e) => {
					ssi?.(e);
					changeVisiblePanel(e[EventDetail].selectedIndex, e);
					setLocalStorageIndex(e[EventDetail].selectedIndex);
					changeSingleSelectedIndex(e[EventDetail].selectedIndex, e);
				}),
				singleSelectionAriaPropName: "aria-selected",
				singleSelectionMode: singleSelectionMode ?? "focus",
				initiallySingleSelectedIndex: initiallySingleSelectedIndex ?? null,
				...singleSelectionParameters
			},
			multiSelectionParameters: {
				multiSelectionAriaPropName: null,
				multiSelectionMode: "disabled",
				onSelectionChange: null
			},
			paginatedChildrenParameters: {
				paginationMax: null,
				paginationMin: null
			},
			...restParams
		});
		const { singleSelectionReturn: { changeSingleSelectedIndex } } = listNavRet1;
		return {
			contextPanels: useMemoObject({
				...managedChildContext,
				tabPanelContext: useMemoObject({
					getPanelId,
					getTabId,
					getVisibleIndex,
					setSelectedIndex: changeSingleSelectedIndex
				})
			}),
			contextTabs: useMemoObject({
				...context,
				tabsContext: useMemoObject({
					getTabId,
					getPanelId,
					getVisibleIndex,
					setSelectedIndex: changeSingleSelectedIndex
				})
			}),
			propsContainer: useMergedProps(listNavigationSingleSelectionProps, propsInput, {
				role: role ?? "tablist",
				"aria-orientation": orientation ?? "horizontal"
			}),
			propsLabel,
			...listNavRet1
		};
	});
}
/**
* Implements a single tab of a Tabs component.
* 
* The index that this child uses controls which TabPanel it shows when selected.
* 
* @compositeParams
*/
function useTab({ info: { focusSelf: focusSelfParent, index, untabbable, ...info }, textContentParameters, pressParameters: { focusSelf: focusSelfChild, longPressThreshold, onPressingChange, ...void2 }, context, hasCurrentFocusParameters, refElementParameters, singleSelectionChildParameters, ...void3 }) {
	return useMonitoring(function useTab() {
		const { propsChild: listNavigationSingleSelectionChildProps, propsTabbable, pressParameters: { excludeSpace, ...void1 }, selectionChildReturn: { firePressSelectionEvent }, refElementReturn, ...listNavRet2 } = useCompleteListNavigationChild({
			context,
			info: {
				index,
				focusSelf: focusSelfParent,
				untabbable,
				...info
			},
			textContentParameters,
			hasCurrentFocusParameters,
			refElementParameters,
			singleSelectionChildParameters,
			multiSelectionChildParameters: {
				initiallyMultiSelected: false,
				multiSelectionDisabled: true,
				onMultiSelectChange: null
			}
		});
		const { pressReturn, props: propsPressStable } = usePress({
			pressParameters: {
				onPressSync: firePressSelectionEvent,
				focusSelf: focusSelfChild,
				allowRepeatPresses: false,
				excludeEnter: returnFalse,
				excludePointer: returnFalse,
				excludeSpace,
				longPressThreshold,
				onPressingChange
			},
			refElementReturn
		});
		const { singleSelectionChildReturn: { singleSelected }, rovingTabIndexChildReturn: { tabbable } } = listNavRet2;
		const { getPanelId, getTabId } = context.tabsContext;
		const panelId = getPanelId(index);
		const tabId = getTabId(index);
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		assertEmptyObject(void3);
		return {
			pressReturn,
			refElementReturn,
			props: useMergedProps(propsPressStable, listNavigationSingleSelectionChildProps, propsTabbable, {
				"data-tabbable": tabbable.toString(),
				"data-selected": singleSelected.toString(),
				role: "tab",
				"aria-controls": panelId,
				id: tabId
			}),
			...listNavRet2
		};
	});
}
/**
* Implements the TabPanel a Tab controls.
* 
* @remarks A hidden tab panel is made `inert` so that it cannot be interacted with, so you can just set `opacity: 0` on your hidden panels if that's how you want to style them. 
* They'll still be properly removed from the tab order (i.e. you don't **also** need `display: none`).
* 
* @compositeParams
*/
function useTabPanel({ info, context }) {
	return useMonitoring(function useTablePanel() {
		const { index } = info;
		const { tabPanelContext: { getVisibleIndex: g, getPanelId, getTabId } } = context;
		const [lastKnownVisibleIndex, setLastKnownVisibleIndex, getLastKnownVisibleIndex] = useState(g());
		const [isVisible, setIsVisible, _getIsVisible] = useState(null);
		useManagedChild({
			context,
			info: {
				getVisible: useStableCallback(() => {
					return getLastKnownVisibleIndex() == index;
				}),
				setVisibleIndex: useStableCallback((newIndex, prevIndex) => {
					let changeIndex = newIndex == index ? prevIndex : newIndex;
					if (changeIndex != null) setLastKnownVisibleIndex(changeIndex);
					if (newIndex == index) setIsVisible(true);
					else setIsVisible(false);
				}),
				...info
			}
		});
		const panelId = getPanelId(info.index);
		const tabId = getTabId(info.index);
		return {
			props: useMergedProps({
				role: "tabpanel",
				"aria-labelledby": tabId,
				id: panelId,
				inert: !isVisible
			}),
			tabPanelReturn: {
				visibleOffset: lastKnownVisibleIndex == null ? null : index - lastKnownVisibleIndex,
				visible: isVisible,
				getVisible: useStableCallback(() => {
					return getLastKnownVisibleIndex() === index;
				})
			}
		};
	});
}
// src/use-toasts.tsx
/**
* Allows any descendent children to push a visible (and/or audible) message to the user's attention.
* 
* @compositeParams
* 
* @hasChild {@link useToast}
*/
function useToasts({ managedChildrenParameters: { onChildrenMountChange: ocmu, onAfterChildLayoutEffect }, toastsParameters: { visibleCount } }) {
	return useMonitoring(function useToasts() {
		const currentIndexQueue = useRef([]);
		const getMaxVisibleCount = useStableGetter(visibleCount);
		const nextIndexToStartAt = useRef(0);
		const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
		const { context, managedChildrenReturn, ..._childInfo } = useManagedChildren({ managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenMountChange: ocmu
		} });
		const { getChildren: getToastQueue } = managedChildrenReturn;
		const toastQueue = getToastQueue();
		const showHighestPriorityToast = useCallback(() => {
			const max = Math.min(getMaxVisibleCount(), currentIndexQueue.current.length);
			let start = nextIndexToStartAt.current;
			for (let i = start; i < max; ++i) {
				const highestPriorityToast = toastQueue.getAt(currentIndexQueue.current[i]);
				console.assert(!!highestPriorityToast);
				highestPriorityToast?.show();
			}
			nextIndexToStartAt.current = max;
		}, []);
		const onAnyToastMounted = useCallback((toastIndex) => {
			currentIndexQueue.current.push(toastIndex);
			toastQueue.getAt(toastIndex)?.setNumberAheadOfMe(currentIndexQueue.current.length - 1);
			showHighestPriorityToast();
		}, []);
		const onAnyToastDismissed = useCallback((_index) => {
			const removalIndex = currentIndexQueue.current.findIndex((i) => i == _index);
			toastQueue.forEach((c) => {
				c.setNumberAheadOfMe((prev) => {
					if (prev < 0) return prev - 1;
					else return prev;
				});
			});
			toastQueue.getAt(_index)?.setNumberAheadOfMe(-1);
			toastQueue.forEach((c) => {
				c.setNumberAheadOfMe((prev) => {
					if (prev > removalIndex) return prev - 1;
					else return prev;
				});
			});
			currentIndexQueue.current.splice(removalIndex, 1);
			showHighestPriorityToast();
		}, []);
		const [_mouseOver2, setMouseOver, _getMouseOver] = useState(false);
		useGlobalHandler(getDocument(), "pointermove", (e) => {
			const mouseOver = e.target != null && e.target instanceof Node && (getElement()?.contains(e.target) || getElement() == e.target);
			setMouseOver(mouseOver);
		});
		const toastContext = {
			onAnyToastDismissed,
			getMaxVisibleCount,
			onAnyToastMounted
		};
		const props = useMergedProps(useMergedProps(propsStable, { class: "toasts-container" }));
		return {
			context: {
				...context,
				toastContext
			},
			managedChildrenReturn,
			props
		};
	});
}
/**
* @compositeParams
*/
function useToast({ toastParameters: { politeness, timeout, children }, info: { index, ...info }, context }) {
	return useMonitoring(function useToast() {
		const { getMaxVisibleCount, onAnyToastDismissed, onAnyToastMounted } = context.toastContext;
		const [numberOfToastsAheadOfUs, setNumberOfToastsAheadOfUs] = useState(Infinity);
		const getIndex = useStableGetter(index);
		const [dismissed2, setDismissed2, getDismissed2] = useState(false);
		const [showing2, setShowing2, getShowing2] = useState(false);
		const [triggerIndex, setTriggerIndex] = useState(1);
		const notify = useNotify();
		const dismiss = useCallback(() => {
			if (!getDismissed2()) onAnyToastDismissed(getIndex());
			setDismissed2(true);
			setShowing2(false);
		}, []);
		const show = useStableCallback(() => {
			notify(politeness ?? "polite", /* @__PURE__ */ jsx("p", { children }));
			setShowing2(true);
		});
		useEffect(() => {
			if (!getDismissed2() && !getShowing2()) {
				if (numberOfToastsAheadOfUs >= 0 && numberOfToastsAheadOfUs < getMaxVisibleCount()) show();
			}
		}, [numberOfToastsAheadOfUs]);
		const focus2 = useCallback(() => {
			const element = getElement();
			if (element) {
				const firstFocusable = findFirstFocusable(element);
				focus$1(firstFocusable);
			}
		}, []);
		const { managedChildReturn } = useManagedChild({
			info: {
				index,
				focus: focus2,
				setNumberAheadOfMe: setNumberOfToastsAheadOfUs,
				show,
				...info
			},
			context
		});
		const resetDismissTimer = useCallback(() => {
			setTriggerIndex((i) => ++i);
		}, []);
		useEffect(() => {
			onAnyToastMounted(index);
		}, []);
		useTimeout({
			timeout: timeout == null || numberOfToastsAheadOfUs != 0 ? null : isFinite(timeout) ? timeout : timeout > 0 ? null : 0,
			callback: () => {
				if (showing2) dismiss();
			},
			triggerIndex: showing2 ? triggerIndex : false
		});
		const { refElementReturn: { getElement }, propsStable } = useRefElement({ refElementParameters: {} });
		return {
			toastReturn: {
				dismissed: dismissed2,
				showing: showing2,
				numberOfToastsAheadOfUs,
				dismiss,
				resetDismissTimer
			},
			managedChildReturn,
			props: propsStable
		};
	});
}
// src/use-tooltip.ts
typeof window == "undefined" || matchMedia("(any-hover: hover)");
let mediaQuery = typeof window == "undefined" ? null : matchMedia("(hover: hover)");
let pageCurrentlyUsingHover = mediaQuery?.matches || false;
let allCallbacks = /* @__PURE__ */ new Set();
if (mediaQuery) mediaQuery.onchange = (ev) => {
	pageCurrentlyUsingHover = ev.matches;
	allCallbacks.forEach((fn) => fn(ev.matches));
};
/**
* Implements a [Tooltip](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/) pattern.
* 
* @remarks Tooltips are remarkably under-specified, so some of this is speculative.
* 
* @compositeParams
*/
function useTooltip({ tooltipParameters: { onStatus, tooltipSemanticType, hoverDelay, usesLongPress }, activeElementParameters, escapeDismissParameters, pressReturn: { longPress, ...void2 }, ...void1 }) {
	return useMonitoring(function useTooltip() {
		useGlobalHandler(getWindow(), "mouseout", useCallback((e) => {
			if (e.relatedTarget == null) onHoverChanged(false, "popup");
		}, []));
		const [usesHover, setUsesHover] = useState(pageCurrentlyUsingHover);
		useEffect(() => {
			if (mediaQuery) {
				let handler = (ev) => {
					setUsesHover(ev.matches);
				};
				mediaQuery.addEventListener("change", handler, { passive: true });
				return () => mediaQuery.removeEventListener("change", handler, {});
			}
		});
		/**
		* Whether the hover/focus-popup/trigger state we have results in us showing this tooltip.
		* 
		* This is used purely to attach global event handlers that should only be there when the tooltip is open (e.g. `useDismiss`)
		*/
		const [openLocal, setOpenLocal] = useState(false);
		const [getState, setState] = usePassiveState(useStableCallback((nextState, _prevState) => {
			if (hoverTimeoutHandle.current) {
				clearTimeout(hoverTimeoutHandle.current);
				hoverTimeoutHandle.current = null;
			}
			if (nextState == null) inputState.current = null;
			switch (nextState) {
				case "focused-popup":
				case "focused-trigger":
					onStatus("focus");
					break;
				case "hovering-popup":
				case "hovering-trigger":
					onStatus("hover");
					break;
				default: onStatus(null);
			}
			setOpenLocal(!!nextState);
		}), returnNull);
		let { propsReferencer: propsTrigger, propsSource: propsPopup } = useRandomId({ randomIdParameters: {
			prefix: Prefices.tooltip,
			otherReferencerProp: tooltipSemanticType == "description" ? "aria-describedby" : "aria-labelledby"
		} });
		const { refElementReturn: { getElement: getTriggerElement }, propsStable: triggerRefProps } = useRefElement({ refElementParameters: {} });
		const { refElementReturn: { getElement: getPopupElement }, propsStable: popupRefProps } = useRefElement({ refElementParameters: {} });
		let inputState = useRef(null);
		let hoverTimeoutHandle = useRef(null);
		const onHoverChanged = useStableCallback((hovering, which) => {
			if (hoverTimeoutHandle.current) clearTimeout(hoverTimeoutHandle.current);
			if (hovering) {
				inputState.current = "hover";
				if (usesLongPress && !usesHover) {} else hoverTimeoutHandle.current = setTimeout(() => {
					setState(`hovering-${which}`);
					hoverTimeoutHandle.current = null;
				}, hoverDelay || 0);
			} else {
				setState(null);
				inputState.current = null;
			}
		});
		const onCurrentFocusedInnerChanged = useCallback((focused, which) => {
			if (inputState.current != "hover") {
				if (focused) {
					inputState.current = "focus";
					setState(`focused-${which}`);
				} else {
					setState(null);
					inputState.current = null;
				}
			} else {
				setState(null);
				inputState.current = null;
			}
		}, []);
		const onTriggerCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "trigger"), [onCurrentFocusedInnerChanged]);
		const onPopupCurrentFocusedInnerChanged = useCallback((focused) => onCurrentFocusedInnerChanged(focused, "popup"), [onCurrentFocusedInnerChanged]);
		const { hasCurrentFocusReturn: triggerFocusReturn } = useHasCurrentFocus({
			hasCurrentFocusParameters: {
				onCurrentFocusedChanged: null,
				onCurrentFocusedInnerChanged: onTriggerCurrentFocusedInnerChanged
			},
			refElementReturn: { getElement: getTriggerElement }
		});
		const { hasCurrentFocusReturn: popupFocusReturn } = useHasCurrentFocus({
			hasCurrentFocusParameters: {
				onCurrentFocusedChanged: null,
				onCurrentFocusedInnerChanged: onPopupCurrentFocusedInnerChanged
			},
			refElementReturn: { getElement: getPopupElement }
		});
		const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
			backdropDismissParameters: {
				dismissBackdropActive: true,
				onDismissBackdrop: null
			},
			lostFocusDismissParameters: {
				dismissLostFocusActive: false,
				onDismissLostFocus: null
			},
			dismissParameters: {
				dismissActive: openLocal,
				onDismiss: useStableCallback((_e, _reason) => {
					setState(null);
				})
			},
			activeElementParameters,
			escapeDismissParameters: {
				dismissEscapeActive: true,
				onDismissEscape: null,
				...escapeDismissParameters
			}
		});
		const otherPopupProps = { onPointerEnter: useCallback(() => {
			onHoverChanged(true, "popup");
		}, []) };
		const otherTriggerProps = {
			onPointerEnter: useCallback(() => {
				onHoverChanged(true, "trigger");
			}, []),
			onPointerUp: useCallback(() => {
				onHoverChanged(false, "trigger");
			}, []),
			onClick: useStableCallback((e) => {
				if (!usesHover) {
					if (usesLongPress) {} else {
						onCurrentFocusedInnerChanged(true, "trigger");
						focus$1(e.currentTarget);
					}
				} else onHoverChanged(true, "trigger");
			})
		};
		useGlobalHandler(getDocument(), "pointermove", !openLocal ? null : ((e) => {
			const popupElement = getPopupElement();
			const triggerElement = getTriggerElement();
			const mouseElement = e.target;
			let overPopup = popupElement?.contains(mouseElement);
			let overTrigger = triggerElement?.contains(mouseElement);
			if (!overPopup && !overTrigger && inputState.current == "hover") onHoverChanged(false, "popup");
		}), {
			capture: true,
			passive: true
		});
		assertEmptyObject(void1);
		assertEmptyObject(void2);
		useEffect(() => {
			if (usesLongPress && !usesHover) {
				if (longPress) {
					inputState.current = null;
					onCurrentFocusedInnerChanged(true, "trigger");
					focus$1(getTriggerElement());
				}
			}
		}, [
			longPress,
			usesHover,
			usesLongPress
		]);
		return {
			refElementPopupReturn,
			refElementSourceReturn,
			propsPopup: useMergedProps(popupRefProps, propsPopup, popupFocusReturn.propsStable, { role: "tooltip" }, otherPopupProps, propsStablePopup),
			propsTrigger: useMergedProps(triggerRefProps, propsTrigger, triggerFocusReturn.propsStable, { onClick: useStableCallback((e) => focus$1(e.currentTarget)) }, otherTriggerProps, propsStableSource),
			tooltipReturn: { getState }
		};
	});
}
// src/component/util.tsx
/**
* Almost all components are built in the exact same way from their implementing hook -- this just sets all of that up.
* 
* @param imperativeHandle The `imperativeHandle` prop all component props have that hook a `ref` up to the hook's return values
* @param render The `render` prop all component props have that turns a hook's return values into JSX to render
* @param Context Optional. Some hooks return a `context` object, and if so, it will be rendered with the `Context` object provided.
* @param info The return type of the hook.
* @returns 
*/
function useComponent(imperativeHandle, render, Context, info) {
	useImperativeHandle(imperativeHandle, () => info);
	if (Context) return /* @__PURE__ */ jsx(Context.Provider, {
		value: info.context,
		children: render(info)
	});
	else return render(info);
}
function useComponentC(imperativeHandle, render, ContextChildren, ContextProcessing, info) {
	useImperativeHandle(imperativeHandle, () => info);
	let ch = render(info);
	if (ContextChildren) ch = /* @__PURE__ */ jsx(ContextChildren.Provider, {
		value: info.contextChildren,
		children: ch
	});
	if (ContextProcessing) ch = /* @__PURE__ */ jsx(ContextProcessing.Provider, {
		value: info.contextProcessing,
		children: ch
	});
	return ch;
}
const ContextDefaults = {
	collator: createContext(null),
	pageNavigationSize: createContext(.1),
	typeaheadTimeout: createContext(1e3),
	focusSelf: createContext((e) => e.focus?.()),
	noTypeahead: createContext(false),
	getIndex: createContext((v) => v.props.index),
	disableArrowKeys: createContext(false),
	disableHomeEndKeys: createContext(false),
	getWindow: createContext(() => globalThis.window),
	getDocument: createContext(() => globalThis.document),
	focusOpener: createContext((e) => focus$1(e)),
	getText: createContext((e) => e?.textContent ?? ""),
	singleSelectionMode: createContext("activation"),
	multiSelectionMode: createContext("activation")
};
function useDefault(context, userValue) {
	const defaultValue = useContext(ContextDefaults[context]);
	return userValue ?? defaultValue;
}
const ParentDepthContext = createContext(0);
function useDefaultRenderPortal({ portalId, children }) {
	const portalRef = useRef(null);
	const document = getDocument();
	portalRef.current ??= document?.getElementById(portalId) ?? void 0;
	if (portalRef.current) return createPortal(children, portalRef.current);
	else return children;
}
// src/component/accordion.tsx
const AccordionSectionContext = createContext(null);
const Accordion = /* @__PURE__ */ memo(function Accordion({ disableHomeEndKeys, initialIndex, onAfterChildLayoutEffect, onChildrenMountChange, navigatePastEnd, navigatePastStart, pageNavigationSize, localStorageKey, collator, noTypeahead, typeaheadTimeout, onChildrenCountChange, render, imperativeHandle, orientation, onNavigateLinear, onNavigateTypeahead, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, AccordionSectionContext, useAccordion({
		accordionParameters: {
			orientation,
			initialIndex,
			localStorageKey: localStorageKey ?? null
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		linearNavigationParameters: {
			onNavigateLinear,
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenMountChange,
			onChildrenCountChange
		}
	}));
});
const AccordionSection = /* @__PURE__ */ memo((function AccordionSection({ open, index, tagButton, disabled, bodyRole, untabbable, getText, imperativeHandle, onPressSync, focusSelf, render, info, onElementChange, onMount, onUnmount, onTextContentChange, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useAccordionSection({
		buttonParameters: {
			disabled: disabled ?? false,
			tagButton,
			onPressSync
		},
		pressParameters: { focusSelf: useDefault("focusSelf", focusSelf) },
		accordionSectionParameters: {
			open,
			bodyRole: bodyRole ?? "region"
		},
		info: {
			index,
			untabbable: untabbable || false,
			...info
		},
		refElementHeaderButtonParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		refElementBodyParameters: {},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		context: useContextWithWarning(AccordionSectionContext, "accordion section")
	}));
}));
// src/component/button.tsx
const Button = /* @__PURE__ */ memo((function Button({ tagButton, pressed, render, disabled, onElementChange, onMount, onUnmount, allowRepeatPresses, longPressThreshold, excludeSpace, onPressingChange, onPressSync, focusSelf, role, imperativeHandle, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useButton({
		buttonParameters: {
			onPressSync,
			role,
			tagButton,
			pressed,
			disabled
		},
		pressParameters: {
			longPressThreshold,
			allowRepeatPresses,
			excludeSpace,
			onPressingChange,
			focusSelf: useDefault("focusSelf", focusSelf)
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		}
	}));
}));
// src/component/checkbox-group.tsx
const UseCheckboxGroupChildContext = createContext(null);
const CheckboxGroup = /* @__PURE__ */ memo((function CheckboxGroup({ render, collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, onTabbableIndexChange, untabbable, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, getSortValueAt, compare, getIndex, ...void1 }) {
	getSortValueAt ??= identity$1;
	useEnsureStability("CheckboxGroup", getSortValueAt);
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, UseCheckboxGroupChildContext, useCheckboxGroup({
		linearNavigationParameters: {
			onNavigateLinear,
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		checkboxGroupParameters: { orientation: orientation ?? "vertical" },
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		multiSelectionParameters: {
			multiSelectionAriaPropName,
			multiSelectionMode: multiSelectionMode || "activation",
			onSelectionChange
		},
		processedIndexManglerParameters: {
			compare,
			getIndex: useDefault("getIndex", getIndex),
			getSortValueAt
		}
	}));
}));
const CheckboxGroupParent = /* @__PURE__ */ memo((function CheckboxGroupParent({ render, index, focusSelf, untabbable, imperativeHandle, getText, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, initiallyMultiSelected, multiSelectionDisabled, onMultiSelectChange, singleSelectionDisabled, onTextContentChange, ..._rest }) {
	const context = useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group");
	console.assert(context != null, `This CheckboxGroupParent is not contained within a CheckboxGroup`);
	return useComponent(imperativeHandle, render, null, useCheckboxGroupParent({
		info: {
			index,
			untabbable: untabbable || false,
			focusSelf
		},
		context,
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		multiSelectionChildParameters: {
			multiSelectionDisabled: multiSelectionDisabled || false,
			initiallyMultiSelected: initiallyMultiSelected || false,
			onMultiSelectChange
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
	}));
}));
const CheckboxGroupChild = /* @__PURE__ */ memo((function CheckboxGroupChild({ index, render, checked, onChangeFromParent, untabbable, getText, focusSelf, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, multiSelectionDisabled, onMultiSelectChange, onTextContentChange, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useCheckboxGroupChild({
		checkboxGroupChildParameters: {
			checked,
			onChangeFromParent
		},
		info: {
			index,
			untabbable: untabbable || false,
			focusSelf
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		context: useContextWithWarning(UseCheckboxGroupChildContext, "checkbox group"),
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		multiSelectionChildParameters: {
			multiSelectionDisabled: multiSelectionDisabled || false,
			onMultiSelectChange
		}
	}));
}));
// src/component/checkbox.tsx
function defaultRenderCheckboxLike({ labelPosition, tagInput, tagLabel, makePropsInput, makePropsLabel }) {
	return function(info) {
		const inputProps = makePropsInput(info);
		const { children, ...labelProps } = makePropsLabel(info);
		if (labelPosition == "wrapping") {
			const input = createElement(tagInput, inputProps);
			const label = createElement(tagLabel, {
				...labelProps,
				children: /* @__PURE__ */ jsxs(Fragment, { children: [input, children] })
			});
			return /* @__PURE__ */ jsx(Fragment, { children: label });
		} else if (labelPosition == "separate") {
			const input = createElement(tagInput, inputProps);
			const label = createElement(tagLabel, {
				children,
				...labelProps
			});
			return /* @__PURE__ */ jsxs(Fragment, { children: [input, label] });
		} else {
			console.assert(!!inputProps["aria-label"], `defaultRenderCheckboxLike: inputProps missing aria-label, despite the labelPosition`);
			return createElement(tagInput, inputProps);
		}
	};
}
const Checkbox = /* @__PURE__ */ memo((function Checkbox({ checked, disabled, tagLabel, labelPosition, tagInput, ariaLabel, longPressThreshold, excludeSpace, imperativeHandle, render, onCheckedChange, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useCheckbox({
		checkboxLikeParameters: {
			checked,
			disabled: disabled ?? false
		},
		labelParameters: {
			ariaLabel,
			labelPosition,
			tagInput,
			tagLabel
		},
		pressParameters: {
			excludeSpace,
			longPressThreshold
		},
		checkboxParameters: { onCheckedChange }
	}));
}));
// src/component/dialog.tsx
const Dialog = /* @__PURE__ */ memo((function Dialog({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, focusOpener, getDocument, imperativeHandle, parentDepth, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, focusPopup, ariaLabel, onElementChange, onMount, onUnmount, render }) {
	const defaultParentDepth = useContext(ParentDepthContext);
	let myDepth = (parentDepth ?? defaultParentDepth) + 1;
	return /* @__PURE__ */ jsx(ParentDepthContext.Provider, {
		value: myDepth,
		children: useComponent(imperativeHandle, render, null, useDialog({
			dismissParameters: { onDismiss },
			backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
			modalParameters: { active },
			refElementParameters: {
				onElementChange,
				onMount,
				onUnmount
			},
			escapeDismissParameters: {
				dismissEscapeActive: dismissEscapeActive || false,
				parentDepth: parentDepth ?? defaultParentDepth
			},
			activeElementParameters: {
				getDocument: useDefault("getDocument", getDocument),
				onActiveElementChange,
				onLastActiveElementChange,
				onWindowFocusedChange
			},
			focusTrapParameters: {
				focusOpener: useDefault("focusOpener", focusOpener),
				focusPopup
			},
			labelParameters: { ariaLabel }
		}))
	});
}));
// src/component/drawer.tsx
const Drawer = /* @__PURE__ */ memo((function Drawer({ active, onDismiss, dismissBackdropActive, dismissEscapeActive, dismissLostFocusActive, onElementChange, onMount, onUnmount, focusOpener, focusPopup, getDocument, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, parentDepth, render, trapActive, ariaLabel, ...void1 }) {
	const defaultParentDepth = useContext(ParentDepthContext);
	let myDepth = (parentDepth ?? defaultParentDepth) + 1;
	assertEmptyObject(void1);
	return /* @__PURE__ */ jsx(ParentDepthContext.Provider, {
		value: myDepth,
		children: useComponent(imperativeHandle, render, null, useDrawer({
			dismissParameters: { onDismiss },
			backdropDismissParameters: { dismissBackdropActive: dismissBackdropActive || false },
			lostFocusDismissParameters: { dismissLostFocusActive: dismissLostFocusActive || false },
			modalParameters: { active },
			refElementParameters: {
				onElementChange,
				onMount,
				onUnmount
			},
			escapeDismissParameters: {
				parentDepth: parentDepth ?? defaultParentDepth,
				dismissEscapeActive: dismissEscapeActive || false
			},
			activeElementParameters: {
				getDocument: useDefault("getDocument", getDocument),
				onActiveElementChange,
				onLastActiveElementChange,
				onWindowFocusedChange
			},
			focusTrapParameters: {
				focusOpener: useDefault("focusOpener", focusOpener),
				focusPopup,
				trapActive: trapActive ?? false
			},
			labelParameters: { ariaLabel }
		}))
	});
}));
// src/component/gridlist.tsx
const GridlistRowContext = createContext$1(null);
const GridlistCellContext = createContext$1(null);
const GridlistProcessedChildrenContext = createContext$1(null);
function Gridlist({ render, ariaLabel, collator, disableHomeEndKeys, focusSelfParent, imperativeHandle, initiallyTabbableColumn, multiSelectionAriaPropName, multiSelectionMode, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onLabelClick, onMount, onNavigateLinear, onNavigateTypeahead, onSelectionChange, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, singleSelectionAriaPropName, singleSelectionMode, typeaheadTimeout, untabbable, children, staggered, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, onSingleSelectedIndexChange, singleSelectedIndex, getSortColumn, getSortValueAt, animate, disableIntersectionObserver, ...void1 }) {
	getSortValueAt ??= identity$1;
	useEnsureStability("Gridlist", getSortValueAt);
	assertEmptyObject(void1);
	return useComponentC(imperativeHandle, render, GridlistRowContext, GridlistProcessedChildrenContext, useGridlist({
		gridNavigationParameters: {
			initiallyTabbableColumn: initiallyTabbableColumn || 0,
			onTabbableColumnChange
		},
		labelParameters: {
			ariaLabel,
			onLabelClick: onLabelClick || null
		},
		linearNavigationParameters: {
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			navigatePastEnd: navigatePastEnd || "wrap",
			navigatePastStart: navigatePastStart || "wrap",
			onNavigateLinear,
			pageNavigationSize
		},
		managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenCountChange,
			onChildrenMountChange
		},
		multiSelectionParameters: {
			multiSelectionAriaPropName,
			multiSelectionMode: useDefault("multiSelectionMode", multiSelectionMode),
			onSelectionChange
		},
		paginatedChildrenParameters: {
			paginationMax,
			paginationMin
		},
		randomIdInputParameters: { prefix: Prefices.gridlist },
		randomIdLabelParameters: { prefix: Prefices.gridlistLabel },
		rearrangeableChildrenParameters: {
			children,
			animate: animate || false
		},
		processedIndexManglerParameters: {
			compare: null,
			getIndex: useDefault("getIndex", null)
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		rovingTabIndexParameters: {
			focusSelfParent: useDefault("focusSelf", focusSelfParent),
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		singleSelectionDeclarativeParameters: {
			onSingleSelectedIndexChange,
			singleSelectedIndex
		},
		singleSelectionParameters: {
			singleSelectionAriaPropName,
			singleSelectionMode: useDefault("singleSelectionMode", singleSelectionMode)
		},
		staggeredChildrenParameters: {
			staggered: staggered || false,
			disableIntersectionObserver: disableIntersectionObserver || false
		},
		typeaheadNavigationParameters: {
			collator,
			noTypeahead: noTypeahead || false,
			onNavigateTypeahead,
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		gridNavigationCompleteParameters: {
			getSortColumn,
			getSortValueAt
		}
	}));
}
function GridlistRow(props) {
	const { index, render, collator, getText, initiallyTabbedIndex, multiSelected, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectedChange, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, singleSelectionDisabled, typeaheadTimeout, untabbable, imperativeHandle, onElementChange, onMount, onUnmount } = props;
	return /* @__PURE__ */ jsx(GridlistRowOuter, {
		index,
		imperativeHandle,
		onElementChange,
		onMount,
		onUnmount,
		render: (info) => {
			if (info.hide) return render(info);
			else return /* @__PURE__ */ jsx(GridlistRowInner, {
				index,
				render,
				collator,
				getText,
				imperativeHandle,
				initiallyTabbedIndex,
				multiSelected,
				multiSelectionDisabled,
				navigatePastEnd,
				navigatePastStart,
				noTypeahead,
				onCurrentFocusedChanged,
				onCurrentFocusedInnerChanged,
				onElementChange,
				onMount,
				onMultiSelectedChange,
				onNavigateTypeahead,
				onTabbableIndexChange,
				onTextContentChange,
				onUnmount,
				singleSelectionDisabled,
				typeaheadTimeout,
				untabbable
			});
		}
	});
}
function GridlistRowOuter({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, cssProperty, duration }) {
	return useComponent(imperativeHandle, render, null, useGridlistRowOuter({
		context: useContext(GridlistProcessedChildrenContext),
		info: { index },
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		rearrangeableChildParameters: {
			cssProperty,
			duration
		}
	}));
}
function GridlistRowInner({ index, render, collator, getText, imperativeHandle, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, noTypeahead, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onNavigateTypeahead, onTabbableIndexChange, onTextContentChange, onUnmount, singleSelectionDisabled, typeaheadTimeout, untabbable, multiSelected, onMultiSelectedChange }) {
	untabbable ||= false;
	return useComponent(imperativeHandle, render, GridlistCellContext, useGridlistRow({
		context: useContext(GridlistRowContext),
		info: {
			index,
			untabbable
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		linearNavigationParameters: {
			navigatePastEnd: navigatePastEnd || "wrap",
			navigatePastStart: navigatePastStart || "wrap"
		},
		multiSelectionChildDeclarativeParameters: {
			multiSelected: multiSelected ?? null,
			onMultiSelectedChange
		},
		multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
		rovingTabIndexParameters: {
			initiallyTabbedIndex,
			onTabbableIndexChange,
			untabbable
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		typeaheadNavigationParameters: {
			collator,
			noTypeahead: noTypeahead || false,
			onNavigateTypeahead,
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		}
	}));
}
function GridlistCell({ index, render, getText, imperativeHandle, onTextContentChange, untabbable, allowRepeatPresses, colSpan, excludeEnter, excludePointer, excludeSpace, focusSelf, longPressThreshold, onPressSync, onPressingChange }) {
	untabbable ||= false;
	return useComponent(imperativeHandle, render, null, useGridlistCell({
		context: useContext(GridlistCellContext),
		info: {
			index,
			untabbable,
			focusSelf: useDefault("focusSelf", focusSelf)
		},
		gridNavigationCellParameters: { colSpan },
		pressParameters: {
			allowRepeatPresses,
			excludeEnter,
			excludePointer,
			excludeSpace,
			longPressThreshold,
			onPressingChange,
			onPressSync
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		}
	}));
}
// src/component/heading.tsx
const HeadingLevelContext = createContext(0);
/**
* Utility component that creates a heading `h1`, `h2`, `h3`, etc.
* 
* Which one is chosen depends on a parent `Heading`, with the root-most `Heading`
* starting at 1, or the value specified by `HeadingReset`.
* 
* Specify the actual contents of the heading with the `heading` prop.
* 
*/
const Heading = /* @__PURE__ */ memo(function Heading({ children, heading, tag, ref, ...props }) {
	const headingLevelBeforeUs = useContext(HeadingLevelContext);
	const newHeadingLevel = headingLevelBeforeUs + 1;
	if (tag == null) {
		if (newHeadingLevel <= 6) tag = `h${newHeadingLevel}`;
		else {
			tag = "div";
			`${newHeadingLevel}`;
		}
	}
	return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(HeadingReset, {
		newLevel: headingLevelBeforeUs + 1,
		children: [createElement(tag, useMergedProps(props, { ref }), heading), children]
	}) });
});
/**
* Set the value that the next `Heading` will use as its base.
* 
* Minimum of 1.
*/
const HeadingReset = /* @__PURE__ */ memo(function HeadingReset({ newLevel, children }) {
	return /* @__PURE__ */ jsx(HeadingLevelContext.Provider, {
		value: newLevel - 1,
		children
	});
});
// src/component/listbox.tsx
const ListboxContext = createContext(null);
createContext(null);
const ListboxChildContext = createContext(null);
const ListboxGroupContext = createContext(null);
const GroupedListbox = /* @__PURE__ */ memo((function GroupedListbox({ ariaLabel, orientation, render, onElementChange, onMount, onUnmount, ...void1 }) {
	assertEmptyObject(void1);
	const info = useListbox({
		labelParameters: { ariaLabel },
		linearNavigationParameters: {
			navigatePastEnd: "passthrough",
			navigatePastStart: "passthrough",
			disableHomeEndKeys: true,
			pageNavigationSize: 1,
			onNavigateLinear: null
		},
		paginatedChildrenParameters: {
			paginationMax: null,
			paginationMin: null
		},
		listboxParameters: {
			groupingType: "with-groups",
			orientation: orientation ?? "vertical"
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange: null,
			untabbable: false
		},
		typeaheadNavigationParameters: {
			collator: null,
			noTypeahead: true,
			typeaheadTimeout: Infinity,
			onNavigateTypeahead: null
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		singleSelectionParameters: {
			singleSelectionMode: "disabled",
			singleSelectionAriaPropName: null
		},
		multiSelectionParameters: {
			multiSelectionMode: "disabled",
			multiSelectionAriaPropName: null,
			onSelectionChange: null
		},
		singleSelectionDeclarativeParameters: {
			onSingleSelectedIndexChange: null,
			singleSelectedIndex: null
		},
		processedIndexManglerParameters: {
			getSortValueAt: identity$1,
			compare: null,
			getIndex: useDefault("getIndex", null)
		}
	});
	return /* @__PURE__ */ jsx(ListboxGroupContext.Provider, {
		value: info,
		children: render(info)
	});
}));
const Listbox = /* @__PURE__ */ memo((function Listbox({ ariaLabel, collator, disableHomeEndKeys, singleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, pageNavigationSize, untabbable, typeaheadTimeout, orientation, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, render, imperativeHandle, singleSelectionAriaPropName, singleSelectionMode, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, paginationMax, paginationMin, getSortValueAt, compare, getIndex, ...void1 }) {
	const listboxGroupInfo = useContext(ListboxGroupContext);
	getSortValueAt ??= identity$1;
	useEnsureStability("Listbox", getSortValueAt);
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, ListboxContext, useListbox({
		labelParameters: { ariaLabel },
		linearNavigationParameters: {
			onNavigateLinear,
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		paginatedChildrenParameters: {
			paginationMax,
			paginationMin
		},
		listboxParameters: {
			groupingType: listboxGroupInfo == null ? "without-groups" : "group",
			orientation: orientation ?? "vertical"
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable: untabbable ?? false
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		singleSelectionParameters: {
			singleSelectionAriaPropName,
			singleSelectionMode: singleSelectionMode || "disabled"
		},
		singleSelectionDeclarativeParameters: {
			onSingleSelectedIndexChange,
			singleSelectedIndex
		},
		multiSelectionParameters: {
			multiSelectionAriaPropName,
			multiSelectionMode: multiSelectionMode || "disabled",
			onSelectionChange
		},
		processedIndexManglerParameters: {
			getSortValueAt,
			compare,
			getIndex: useDefault("getIndex", getIndex)
		}
	}));
}));
const ListboxChildren = /* @__PURE__ */ memo((function ListboxChildren({ children, render, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, animate, disableIntersectionObserver }) {
	const r = useCompleteListNavigationChildren({
		context: useContext(ListboxContext),
		managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenCountChange,
			onChildrenMountChange
		},
		paginatedChildrenParameters: {
			paginationMax,
			paginationMin
		},
		rearrangeableChildrenParameters: {
			children,
			animate: animate || false
		},
		staggeredChildrenParameters: {
			staggered: staggered || false,
			disableIntersectionObserver: disableIntersectionObserver || false
		}
	});
	return useComponent(imperativeHandle, render, ListboxChildContext, r);
}));
const ListboxItem = /* @__PURE__ */ memo((function ListboxItemOuter({ index, render, imperativeHandle, onElementChange: oec1, onMount, onUnmount, getText, untabbable, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, onTextContentChange, cssProperty, duration, ...void1 }) {
	const context = useContextWithWarning(ListboxContext, "listbox");
	console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
	assertEmptyObject(void1);
	const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {
		onElementChange: useStableCallback((...a) => {
			oec1?.(...a);
			oec2?.(...a);
		}),
		onMount,
		onUnmount
	} });
	const { props, refElementParameters: { onElementChange: oec2 }, ...i2 } = useProcessedChild({
		context: useContextWithWarning(ListboxChildContext, "ListboxChildren"),
		info: {
			index,
			getElement: refElementReturn.getElement
		},
		rearrangeableChildParameters: {
			cssProperty,
			duration
		}
	});
	const { managedChildReturn: { getChildren }, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered, childUseEffect } } = i2;
	const props2 = useMergedProps(props, propsStable);
	const processedListboxItemReturn = {
		hidden: true,
		...i2,
		props: props2,
		refElementReturn,
		managedChildReturn: { getChildren }
	};
	useImperativeHandle(imperativeHandle, () => processedListboxItemReturn);
	let retIfHidden = render(processedListboxItemReturn);
	if (hideBecausePaginated || hideBecauseStaggered) return retIfHidden;
	else return /* @__PURE__ */ jsx(ListboxItemInner, {
		index,
		render,
		allowRepeatPresses,
		excludeEnter,
		excludePointer,
		focusSelf,
		getText,
		imperativeHandle,
		longPressThreshold,
		multiSelected,
		multiSelectionDisabled,
		onCurrentFocusedChanged,
		onCurrentFocusedInnerChanged,
		onMount,
		onMultiSelectedChange,
		onPressingChange,
		onUnmount,
		singleSelectionDisabled,
		untabbable,
		hideBecausePaginated,
		hideBecauseStaggered,
		parentIsPaginated,
		parentIsStaggered,
		childUseEffect,
		onTextContentChange,
		props: props2,
		...void1
	});
}));
const ListboxItemInner = /* @__PURE__ */ memo((function ListboxItemInner({ getText, untabbable, index, render, allowRepeatPresses, excludeEnter, excludePointer, longPressThreshold, onPressingChange, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, focusSelf, imperativeHandle, multiSelectionDisabled, singleSelectionDisabled, multiSelected, onMultiSelectedChange, hideBecausePaginated, hideBecauseStaggered, parentIsPaginated, parentIsStaggered, props: props1, childUseEffect, onTextContentChange, ...void1 }) {
	const context = useContextWithWarning(ListboxContext, "listbox");
	console.assert(context != null, `This ListboxItem is not contained within a Listbox`);
	const focusSelfDefault = useCallback((e) => {
		focus$1(e);
	}, []);
	assertEmptyObject(void1);
	useEffect(childUseEffect, [childUseEffect]);
	const { hasCurrentFocusReturn, managedChildReturn, multiSelectionChildReturn, pressReturn, props: props2, refElementReturn, rovingTabIndexChildReturn, singleSelectionChildReturn, textContentReturn } = useListboxItem({
		info: {
			index,
			untabbable: untabbable || false,
			focusSelf: focusSelf ?? focusSelfDefault
		},
		context,
		listboxParameters: {},
		pressParameters: {
			allowRepeatPresses,
			excludeEnter,
			excludePointer,
			longPressThreshold,
			onPressingChange
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
		multiSelectionChildDeclarativeParameters: {
			onMultiSelectedChange,
			multiSelected: multiSelected ?? null
		}
	});
	return useComponent(imperativeHandle, render, null, {
		hasCurrentFocusReturn,
		multiSelectionChildReturn,
		pressReturn,
		props: useMergedProps(props1, props2),
		refElementReturn,
		rovingTabIndexChildReturn,
		singleSelectionChildReturn,
		textContentReturn,
		managedChildReturn,
		staggeredChildReturn: {
			hideBecauseStaggered,
			parentIsStaggered
		},
		paginatedChildReturn: {
			hideBecausePaginated,
			parentIsPaginated
		}
	});
}));
// src/component/menu.tsx
const MenuItemContext = createContext(null);
const Menu = /* @__PURE__ */ memo((function Menu({ collator, disableHomeEndKeys, noTypeahead, typeaheadTimeout, orientation, singleSelectionAriaPropName, singleSelectionMode, untabbable, active, onDismiss, onElementChange, onMount, onUnmount, openDirection, onTabbableIndexChange, singleSelectedIndex, navigatePastEnd, navigatePastStart, onSingleSelectedIndexChange, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, pageNavigationSize, parentDepth, disabled, onOpen, onNavigateLinear, onNavigateTypeahead, getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getSortValueAt, render, imperativeHandle, compare, getIndex, ...void1 }) {
	getSortValueAt ??= identity$1;
	useEnsureStability("Menu", getSortValueAt);
	const defaultParentDepth = useContext(ParentDepthContext);
	let myDepth = (parentDepth ?? defaultParentDepth) + 1;
	untabbable ||= false;
	assertEmptyObject(void1);
	return /* @__PURE__ */ jsx(ParentDepthContext.Provider, {
		value: myDepth,
		children: useComponent(imperativeHandle, render, MenuItemContext, useMenu({
			linearNavigationParameters: {
				onNavigateLinear,
				disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
				pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize),
				navigatePastEnd: navigatePastEnd ?? "wrap",
				navigatePastStart: navigatePastStart ?? "wrap"
			},
			escapeDismissParameters: { parentDepth: parentDepth || 1 },
			dismissParameters: { onDismiss },
			modalParameters: { active },
			refElementParameters: {
				onElementChange,
				onMount,
				onUnmount
			},
			activeElementParameters: {
				getDocument: useDefault("getDocument", getDocument),
				onActiveElementChange,
				onLastActiveElementChange,
				onWindowFocusedChange
			},
			menuParameters: {
				openDirection,
				onOpen
			},
			menuSurfaceParameters: {},
			rovingTabIndexParameters: {
				onTabbableIndexChange,
				untabbable
			},
			typeaheadNavigationParameters: {
				onNavigateTypeahead,
				collator: useDefault("collator", collator),
				noTypeahead: useDefault("noTypeahead", noTypeahead),
				typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
			},
			toolbarParameters: {
				orientation,
				disabled: disabled || false
			},
			singleSelectionParameters: {
				singleSelectionAriaPropName: singleSelectionAriaPropName || "aria-selected",
				singleSelectionMode: singleSelectionMode || "disabled"
			},
			multiSelectionParameters: {
				multiSelectionAriaPropName,
				multiSelectionMode: multiSelectionMode || "disabled",
				onSelectionChange
			},
			singleSelectionDeclarativeParameters: {
				singleSelectedIndex,
				onSingleSelectedIndexChange
			},
			processedIndexManglerParameters: {
				getSortValueAt,
				compare,
				getIndex: useDefault("getIndex", getIndex)
			}
		}))
	});
}));
const MenuItem = /* @__PURE__ */ memo((function MenuItem({ index, untabbable, onPress, getText, role, focusSelf, onPressingChange, render, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, multiSelectionDisabled, singleSelectionDisabled, onTextContentChange, multiSelected, onMultiSelectedChange, ...void1 }) {
	const context = useContextWithWarning(MenuItemContext, "menu");
	const defaultFocusSelf = useCallback((e) => focus$1(e), []);
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useMenuItem({
		info: {
			index,
			untabbable: untabbable || false,
			focusSelf: focusSelf ?? defaultFocusSelf,
			...uinfo
		},
		context,
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		menuItemParameters: {
			onPress,
			role: role ?? "menuitem"
		},
		pressParameters: { onPressingChange },
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
		multiSelectionChildDeclarativeParameters: {
			multiSelected: multiSelected ?? null,
			onMultiSelectedChange
		}
	}));
}));
// src/component/menubar.tsx
const MenubarItemContext = createContext(null);
const Menubar = /* @__PURE__ */ memo((function Menubar({ render, collator, disableHomeEndKeys, navigatePastEnd, navigatePastStart, pageNavigationSize, orientation, noTypeahead, untabbable, onTabbableIndexChange, disabled, singleSelectedIndex, onSingleSelectedIndexChange, typeaheadTimeout, role, ariaLabel, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, getSortValueAt, compare, getIndex, ...void1 }) {
	assertEmptyObject(void1);
	getSortValueAt ??= identity$1;
	useEnsureStability("Menubar", getSortValueAt);
	const info = useMenubar({
		linearNavigationParameters: {
			onNavigateLinear,
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		toolbarParameters: {
			orientation,
			role: role ?? "menubar",
			disabled: disabled || false
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		labelParameters: { ariaLabel },
		singleSelectionParameters: {
			singleSelectionAriaPropName,
			singleSelectionMode: singleSelectionMode || "activation"
		},
		multiSelectionParameters: {
			multiSelectionAriaPropName,
			multiSelectionMode: multiSelectionMode || "activation",
			onSelectionChange
		},
		singleSelectionDeclarativeParameters: {
			singleSelectedIndex,
			onSingleSelectedIndexChange
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		processedIndexManglerParameters: {
			getSortValueAt,
			compare,
			getIndex: useDefault("getIndex", getIndex)
		}
	});
	useImperativeHandle(imperativeHandle, () => info);
	return /* @__PURE__ */ jsx(MenubarItemContext.Provider, {
		value: info.context,
		children: render(info)
	});
}));
const MenubarItem = /* @__PURE__ */ memo((function MenubarItem({ index, render, focusSelf, untabbable, getText, onPress, onPressingChange, role, imperativeHandle, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onUnmount, info: uinfo, multiSelectionDisabled, singleSelectionDisabled, onTextContentChange, multiSelected, onMultiSelectedChange, ...void1 }) {
	const defaultFocusSelf = useCallback((e) => focus$1(e), []);
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useMenubarChild({
		info: {
			index,
			untabbable: untabbable || false,
			focusSelf: focusSelf ?? defaultFocusSelf,
			...uinfo
		},
		context: useContextWithWarning(MenubarItemContext, "menubar"),
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		menuItemParameters: {
			onPress: onPress ?? null,
			role: role ?? "menuitem"
		},
		pressParameters: { onPressingChange },
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
		multiSelectionChildDeclarativeParameters: {
			multiSelected: multiSelected ?? null,
			onMultiSelectedChange
		}
	}));
}));
// src/component/progress.tsx
const Progress = /* @__PURE__ */ memo((function Progress({ tagProgressIndicator, ariaLabel, max, render, value, valueText, imperativeHandle, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useProgress({
		labelParameters: { ariaLabel },
		progressIndicatorParameters: {
			max: max ?? 100,
			value: value ?? "indeterminate",
			valueText,
			tagProgressIndicator
		}
	}));
}));
const ProgressWithHandler = /* @__PURE__ */ memo((function ProgressWithHandler({ ariaLabel, forciblyPending, render, tagProgressIndicator, asyncHandler, capture, debounce, throttle, notifyFailure, notifyPending, notifySuccess, imperativeHandle, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useProgressWithHandler({
		asyncHandlerParameters: {
			asyncHandler,
			capture,
			debounce,
			throttle
		},
		labelParameters: { ariaLabel },
		progressIndicatorParameters: { tagProgressIndicator },
		progressWithHandlerParameters: {
			forciblyPending,
			notifyFailure,
			notifyPending,
			notifySuccess
		}
	}));
}));
// src/component/radio-group.tsx
const RadioContext = createContext(null);
const RadioGroup = /* @__PURE__ */ memo((function RadioGroup({ render, name, collator, disableHomeEndKeys, arrowKeyDirection, noTypeahead, typeaheadTimeout, ariaLabel, navigatePastEnd, navigatePastStart, selectedValue, untabbable, onTabbableIndexChange, onNavigateLinear, onNavigateTypeahead, pageNavigationSize, onElementChange, onMount, onUnmount, imperativeHandle, onSelectedValueChange, singleSelectionMode, getSortValueAt, compare, getIndex, ...void1 }) {
	untabbable ??= false;
	getSortValueAt ??= identity$1;
	useEnsureStability("RadioGroup", getSortValueAt);
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, RadioContext, useRadioGroup({
		singleSelectionParameters: { singleSelectionMode: singleSelectionMode ?? "focus" },
		linearNavigationParameters: {
			onNavigateLinear,
			arrowKeyDirection: arrowKeyDirection ?? "either",
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		labelParameters: { ariaLabel },
		radioGroupParameters: {
			name,
			selectedValue,
			onSelectedValueChange
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		processedIndexManglerParameters: {
			getSortValueAt,
			compare,
			getIndex: useDefault("getIndex", getIndex)
		}
	}));
}));
const Radio = /* @__PURE__ */ memo((function Radio({ disabled, index, render, value, ariaLabel, labelPosition, untabbable, tagInput, tagLabel, getText, longPressThreshold, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, onTextContentChange, ...void1 }) {
	assertEmptyObject(void1);
	const context = useContextWithWarning(RadioContext, "radio group");
	console.assert(context != null, `This Radio is not contained within a RadioGroup`);
	return useComponent(imperativeHandle, render, null, useRadio({
		radioParameters: { value },
		checkboxLikeParameters: { disabled: disabled ?? false },
		info: {
			index,
			untabbable: untabbable || false
		},
		context,
		labelParameters: {
			ariaLabel,
			labelPosition,
			tagInput,
			tagLabel
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		pressParameters: { longPressThreshold },
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		}
	}));
}));
// src/component/slider.tsx
const SliderThumbContext = createContext(null);
function Slider({ max, min, onAfterChildLayoutEffect, onChildrenMountChange, render, imperativeHandle, onChildrenCountChange, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, SliderThumbContext, useSlider({
		managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenMountChange,
			onChildrenCountChange
		},
		sliderParameters: {
			max,
			min
		}
	}));
}
function SliderThumb({ label, tag, value, max, min, index, render, valueText, imperativeHandle, onValueChange, info, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useSliderThumb({
		context: useContextWithWarning(SliderThumbContext, "slider"),
		info: {
			index,
			...info
		},
		sliderThumbParameters: {
			label,
			tag,
			value,
			max,
			min,
			valueText,
			onValueChange
		}
	}));
}
// src/component/table.tsx
const TableRowContext = createContext(null);
const TableCellContext = createContext(null);
const TableProcessedChildrenContext = createContext(null);
const Table = /* @__PURE__ */ memo(function Table({ ariaLabel, singleSelectionMode, multiSelectionMode, tagTable, imperativeHandle, render, initiallySingleSelectedIndex, multiSelectionAriaPropName, onSelectionChange, onSingleSelectedIndexChange, singleSelectionAriaPropName, collator, disableHomeEndKeys, initiallyTabbableColumn, navigatePastEnd, navigatePastStart, noTypeahead, onElementChange, onMount, onNavigateLinear, onNavigateTypeahead, onTabbableColumnChange, onTabbableIndexChange, onUnmount, pageNavigationSize, paginationMax, paginationMin, typeaheadTimeout, untabbable, getSortValueAt, initiallySortedColumn, getIndex, compare, ...void1 }) {
	assertEmptyObject(void1);
	getSortValueAt ??= identity$1;
	useEnsureStability("Table", getSortValueAt);
	return useComponent(imperativeHandle, render, TableRowContext, useTable({
		labelParameters: { ariaLabel },
		tableParameters: {
			tagTable,
			initiallySortedColumn
		},
		gridNavigationParameters: {
			initiallyTabbableColumn: initiallyTabbableColumn || 0,
			onTabbableColumnChange
		},
		linearNavigationParameters: {
			disableHomeEndKeys: disableHomeEndKeys || false,
			navigatePastEnd: navigatePastEnd || "wrap",
			navigatePastStart: navigatePastStart || "wrap",
			onNavigateLinear,
			pageNavigationSize
		},
		paginatedChildrenParameters: {
			paginationMax,
			paginationMin
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		typeaheadNavigationParameters: {
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			onNavigateTypeahead,
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		singleSelectionParameters: {
			singleSelectionMode: singleSelectionMode || "disabled",
			initiallySingleSelectedIndex,
			onSingleSelectedIndexChange,
			singleSelectionAriaPropName
		},
		multiSelectionParameters: {
			multiSelectionMode: multiSelectionMode || "disabled",
			multiSelectionAriaPropName,
			onSelectionChange
		},
		gridNavigationCompleteParameters: { getSortValueAt },
		processedIndexManglerParameters: {
			compare,
			getIndex: useDefault("getIndex", getIndex)
		}
	}));
});
const TableHead = /* @__PURE__ */ memo(function TableHead({ render, tagHead, imperativeHandle }) {
	return useComponent(imperativeHandle, render, null, useTableHead({ tableHeadParameters: { tagHead } }));
});
const TableBody = /* @__PURE__ */ memo(function TableBody({ render, tagTableSection, children, imperativeHandle, onAfterChildLayoutEffect, onChildrenCountChange, onChildrenMountChange, paginationMax, paginationMin, staggered, animate, disableIntersectionObserver }) {
	return useComponent(imperativeHandle, render, TableProcessedChildrenContext, useTableBody({
		context: useContextWithWarning(TableRowContext, "TableRowContext"),
		managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenCountChange,
			onChildrenMountChange
		},
		paginatedChildrenParameters: {
			paginationMax,
			paginationMin
		},
		rearrangeableChildrenParameters: {
			children,
			animate: animate || false
		},
		staggeredChildrenParameters: {
			staggered: staggered || false,
			disableIntersectionObserver: disableIntersectionObserver || false
		},
		tableSectionParameters: { tagTableSection }
	}));
});
const TableHeadRow = /* @__PURE__ */ memo(function TableHeadRow({ render, index, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onElementChange, onMount, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, onUnmount, selected, singleSelectionDisabled, untabbable, imperativeHandle }) {
	return useComponent(imperativeHandle, render, TableCellContext, useTableRow({
		context: useContextWithWarning(TableRowContext, "TableRowContext"),
		info: {
			index,
			untabbable: untabbable || false
		},
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		linearNavigationParameters: {
			navigatePastEnd: navigatePastEnd || "wrap",
			navigatePastStart: navigatePastStart || "wrap"
		},
		multiSelectionChildParameters: {
			initiallyMultiSelected: initiallyMultiSelected ?? null,
			multiSelectionDisabled: multiSelectionDisabled || false,
			onMultiSelectChange
		},
		rovingTabIndexParameters: {
			initiallyTabbedIndex,
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		tableRowParameters: {
			selected,
			tagTableRow
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		refElementParameters: {
			onElementChange: onElementChange ?? null,
			onMount: onMount ?? null,
			onUnmount: onUnmount ?? null
		}
	}));
});
const TableBodyRow = /* @__PURE__ */ memo(function TableBodyRow({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, tagTableRow, getText, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, untabbable }) {
	return /* @__PURE__ */ jsx(TableBodyRowOuter, {
		index,
		imperativeHandle,
		onElementChange,
		onMount,
		onUnmount,
		render: (info) => {
			let inner = /* @__PURE__ */ jsx(TableBodyRowInner, {
				index,
				tagTableRow,
				getText,
				imperativeHandle,
				initiallyMultiSelected,
				initiallyTabbedIndex,
				multiSelectionDisabled,
				navigatePastEnd,
				navigatePastStart,
				onCurrentFocusedChanged,
				onCurrentFocusedInnerChanged,
				onElementChange,
				onMount,
				onMultiSelectChange,
				onTabbableIndexChange,
				onTextContentChange,
				onUnmount,
				selected,
				singleSelectionDisabled,
				untabbable,
				render
			});
			if (info.hide) return render(info);
			else return inner;
		}
	});
});
const TableBodyRowOuter = /* @__PURE__ */ memo(function TableBodyRowOuter({ index, render, imperativeHandle, onElementChange, onMount, onUnmount, cssProperty, duration, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useTableRowOuter({
		context: useContextWithWarning(TableProcessedChildrenContext, "TableProcessedChildrenContext"),
		info: { index },
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		rearrangeableChildParameters: {
			cssProperty,
			duration
		}
	}));
});
const TableBodyRowInner = /* @__PURE__ */ memo(function TableBodyRowInner({ index, render, getText, imperativeHandle, initiallyMultiSelected, initiallyTabbedIndex, multiSelectionDisabled, navigatePastEnd, navigatePastStart, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, onMultiSelectChange, onTabbableIndexChange, onTextContentChange, selected, singleSelectionDisabled, tagTableRow, untabbable, onElementChange, onMount, onUnmount, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, TableCellContext, useTableRow({
		context: useContextWithWarning(TableRowContext, "TableRowContext"),
		info: {
			index,
			untabbable: untabbable || false
		},
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		linearNavigationParameters: {
			navigatePastEnd: navigatePastEnd || "wrap",
			navigatePastStart: navigatePastStart || "wrap"
		},
		multiSelectionChildParameters: {
			initiallyMultiSelected: initiallyMultiSelected ?? null,
			multiSelectionDisabled: multiSelectionDisabled || false,
			onMultiSelectChange
		},
		rovingTabIndexParameters: {
			initiallyTabbedIndex,
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		tableRowParameters: {
			selected,
			tagTableRow
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		refElementParameters: {
			onElementChange: onElementChange ?? null,
			onMount: onMount ?? null,
			onUnmount: onUnmount ?? null
		}
	}));
});
const TableCell = /* @__PURE__ */ memo(function TableCell({ index, render, colSpan, focusSelf, getText, imperativeHandle, onTextContentChange, tagTableCell, untabbable, ...void1 }) {
	assertEmptyObject(void1);
	const defaultFocusSelf = useStableCallback((e) => {
		focus$1(e);
	}, []);
	return useComponent(imperativeHandle, render, null, useTableCell({
		context: useContextWithWarning(TableCellContext, "TableCellContext"),
		gridNavigationCellParameters: { colSpan },
		info: {
			focusSelf: focusSelf ?? defaultFocusSelf,
			index,
			untabbable: untabbable || false
		},
		tableCellParameters: { tagTableCell },
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		}
	}));
});
// src/component/tabs.tsx
const TabsContext = createContext(null);
const TabPanelsContext = createContext(null);
const Tabs = /* @__PURE__ */ memo((function Tabs({ ariaLabel, collator, disableHomeEndKeys, initiallySingleSelectedIndex, navigatePastEnd, navigatePastStart, noTypeahead, onSingleSelectedIndexChange, onTabbableIndexChange, orientation, pageNavigationSize, localStorageKey, singleSelectionMode, untabbable, typeaheadTimeout, role, onNavigateLinear, onNavigateTypeahead, imperativeHandle, onElementChange, onMount, onUnmount, render, getSortValueAt, compare, getIndex, ...void1 }) {
	untabbable ??= false;
	getSortValueAt ??= identity$1;
	useEnsureStability("Tabs", getSortValueAt);
	assertEmptyObject(void1);
	const info = useTabs({
		labelParameters: { ariaLabel },
		linearNavigationParameters: {
			onNavigateLinear,
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable
		},
		singleSelectionParameters: {
			initiallySingleSelectedIndex,
			onSingleSelectedIndexChange,
			singleSelectionMode: singleSelectionMode || "focus"
		},
		tabsParameters: {
			orientation,
			role,
			localStorageKey
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		processedIndexManglerParameters: {
			getSortValueAt,
			compare,
			getIndex: useDefault("getIndex", getIndex)
		}
	});
	const { contextPanels, contextTabs } = info;
	useImperativeHandle(imperativeHandle, () => info);
	return /* @__PURE__ */ jsx(TabsContext.Provider, {
		value: contextTabs,
		children: /* @__PURE__ */ jsx(TabPanelsContext.Provider, {
			value: contextPanels,
			children: render(info)
		})
	});
}));
const Tab = /* @__PURE__ */ memo((function Tab({ focusSelf, untabbable, index, getText, render, longPressThreshold, onPressingChange, imperativeHandle, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, singleSelectionDisabled, onTextContentChange, info: uinfo, ...void1 }) {
	assertEmptyObject(void1);
	const context = useContextWithWarning(TabsContext, "tabs");
	console.assert(context != null, `This Tab is not contained within a Tabs component`);
	const focusSelfDefault = useCallback((e) => {
		focus$1(e);
	}, []);
	return useComponent(imperativeHandle, render, null, useTab({
		info: {
			index,
			untabbable: untabbable || false,
			focusSelf: focusSelf ?? focusSelfDefault,
			...uinfo
		},
		context,
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		pressParameters: {
			focusSelf: focusSelfDefault,
			longPressThreshold,
			onPressingChange
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false }
	}));
}));
const TabPanel = /* @__PURE__ */ memo((function TabPanel({ index, render, info: uinfo }) {
	return render(useTabPanel({
		context: useContextWithWarning(TabPanelsContext, "tabs"),
		info: {
			index,
			...uinfo
		}
	}));
}));
// src/component/toasts.tsx
const ToastContext = createContext(null);
function Toasts({ onAfterChildLayoutEffect, onChildrenMountChange, render, visibleCount, imperativeHandle, onChildrenCountChange, ...void1 }) {
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, ToastContext, useToasts({
		managedChildrenParameters: {
			onAfterChildLayoutEffect,
			onChildrenMountChange,
			onChildrenCountChange
		},
		toastsParameters: { visibleCount }
	}));
}
function Toast({ render, index, timeout, politeness, children, info, imperativeHandle }) {
	return useComponent(imperativeHandle, render, null, useToast({
		toastParameters: {
			timeout,
			politeness,
			children
		},
		info: {
			index,
			...info
		},
		context: useContextWithWarning(ToastContext, "toasts provider")
	}));
}
// src/component/toolbar.tsx
const ToolbarContext = createContext(null);
createContext(null);
const Toolbar = /* @__PURE__ */ memo((function ToolbarU({ render, role, collator, disableHomeEndKeys, disabled, navigatePastEnd, navigatePastStart, pageNavigationSize, singleSelectedIndex, onSingleSelectedIndexChange, orientation, noTypeahead, onTabbableIndexChange, typeaheadTimeout, ariaLabel, imperativeHandle, multiSelectionAriaPropName, multiSelectionMode, onSelectionChange, singleSelectionAriaPropName, singleSelectionMode, untabbable, onNavigateLinear, onNavigateTypeahead, onElementChange, onMount, onUnmount, getSortValueAt, compare, getIndex }) {
	getSortValueAt ??= identity$1;
	useEnsureStability("Toolbar", getSortValueAt);
	const r = useToolbar({
		linearNavigationParameters: {
			onNavigateLinear,
			disableHomeEndKeys: useDefault("disableHomeEndKeys", disableHomeEndKeys),
			navigatePastEnd: navigatePastEnd ?? "wrap",
			navigatePastStart: navigatePastStart ?? "wrap",
			pageNavigationSize: useDefault("pageNavigationSize", pageNavigationSize)
		},
		toolbarParameters: {
			orientation,
			disabled: disabled || false,
			role: role ?? "toolbar"
		},
		rovingTabIndexParameters: {
			onTabbableIndexChange,
			untabbable: untabbable || false
		},
		typeaheadNavigationParameters: {
			onNavigateTypeahead,
			collator: useDefault("collator", collator),
			noTypeahead: useDefault("noTypeahead", noTypeahead),
			typeaheadTimeout: useDefault("typeaheadTimeout", typeaheadTimeout)
		},
		labelParameters: { ariaLabel },
		singleSelectionParameters: {
			singleSelectionAriaPropName,
			singleSelectionMode
		},
		multiSelectionParameters: {
			multiSelectionAriaPropName,
			multiSelectionMode,
			onSelectionChange
		},
		singleSelectionDeclarativeParameters: {
			singleSelectedIndex,
			onSingleSelectedIndexChange
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		processedIndexManglerParameters: {
			getSortValueAt,
			compare,
			getIndex: useDefault("getIndex", getIndex)
		}
	});
	return useComponent(imperativeHandle, render, ToolbarContext, r);
}));
const ToolbarChild = /* @__PURE__ */ memo((function ToolbarChild({ index, render, focusSelf, getText, disabledProp, untabbable, onElementChange, onMount, onUnmount, onCurrentFocusedChanged, onCurrentFocusedInnerChanged, imperativeHandle, info: uinfo, multiSelectionDisabled, singleSelectionDisabled, onTextContentChange, multiSelected, onMultiSelectedChange, ...void1 }) {
	const context = useContextWithWarning(ToolbarContext, "toolbar");
	const focusSelfDefault = useCallback((e) => {
		focus$1(e);
	}, []);
	focusSelf ??= focusSelfDefault;
	assertEmptyObject(void1);
	return useComponent(imperativeHandle, render, null, useToolbarChild({
		context,
		toolbarChildParameters: { disabledProp },
		info: {
			index,
			focusSelf,
			untabbable: untabbable || false,
			...uinfo
		},
		textContentParameters: {
			getText: useDefault("getText", getText),
			onTextContentChange
		},
		hasCurrentFocusParameters: {
			onCurrentFocusedChanged,
			onCurrentFocusedInnerChanged
		},
		refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		},
		singleSelectionChildParameters: { singleSelectionDisabled: singleSelectionDisabled || false },
		multiSelectionChildParameters: { multiSelectionDisabled: multiSelectionDisabled || false },
		multiSelectionChildDeclarativeParameters: {
			multiSelected: multiSelected ?? null,
			onMultiSelectedChange
		}
	}));
}));
// src/component/tooltip.tsx
const Tooltip = /* @__PURE__ */ memo(function TooltipU({ onStatus, getDocument, parentDepth, hoverDelay, render, imperativeHandle, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, tooltipSemanticType, usesLongPress, longPress, ...void1 }) {
	const defaultParentDepth = useContext(ParentDepthContext);
	let myDepth = (parentDepth ?? defaultParentDepth) + 1;
	assertEmptyObject(void1);
	return /* @__PURE__ */ jsx(ParentDepthContext.Provider, {
		value: myDepth,
		children: useComponent(imperativeHandle, render, null, useTooltip({
			escapeDismissParameters: {
				getDocument: useDefault("getDocument", getDocument),
				parentDepth: parentDepth ?? defaultParentDepth
			},
			activeElementParameters: {
				getDocument: useDefault("getDocument", getDocument),
				onActiveElementChange,
				onLastActiveElementChange,
				onWindowFocusedChange
			},
			tooltipParameters: {
				onStatus,
				tooltipSemanticType,
				hoverDelay: hoverDelay ?? null,
				usesLongPress: usesLongPress || false
			},
			pressReturn: { longPress: longPress || false }
		}))
	});
});
export { Accordion, AccordionSection, Button, Checkbox, CheckboxGroup, CheckboxGroupChild, CheckboxGroupParent, Dialog, Drawer, EventDetail, Gridlist, GridlistCell, GridlistRow, GroupedListbox, Heading, HeadingReset, Listbox, ListboxChildren, ListboxItem, Menu, MenuItem, Menubar, MenubarItem, MenubarItemContext, NotificationProviderContext, ParentDepthContext, Progress, ProgressWithHandler, Radio, RadioGroup, Slider, SliderThumb, Tab, TabPanel, Table, TableBody, TableBodyRow, TableCell, TableHead, TableHeadRow, Tabs, Toast, Toasts, Toolbar, ToolbarChild, Tooltip, defaultRenderCheckboxLike, useAccordion, useAccordionSection, useButton, useCheckbox, useCheckboxGroup, useCheckboxGroupChild, useCheckboxGroupParent, useCheckboxLike, useDefault, useDefaultRenderPortal, useDialog, useDrawer, useFocusSentinel, useGridlist, useGridlistCell, useGridlistRow, useGridlistRowOuter, useLabel, useLabelSynthetic, useListbox, useListboxItem, useMenu, useMenuItem, useMenuSurface, useMenubar, useMenubarChild, useNotificationProvider, useNotify, useProgress, useProgressWithHandler, useRadio, useRadioGroup, useSlider, useSliderThumb, useTab, useTabPanel, useTable, useTableBody, useTableCell, useTableHead, useTableRow, useTableRowOuter, useTabs, useToast, useToasts, useToolbar, useToolbarChild, useTooltip };

//# sourceMappingURL=index.mjs.map