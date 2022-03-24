import React from "react";
import { useSelect, useMultipleSelection } from "downshift";
import Button from "../button/Button";
const items = [
  {
    label: "test",
    value: "test",
  },
  {
    label: "beep",
    value: "beep",
  },
];

type OptionType = {
  value: string;
  label: string;
} | null;

const selectedItemStyles = {
  marginLeft: "5px",
  backgroundColor: "aliceblue",
  borderRadius: "10px",
};
const selectedItemIconStyles = { cursor: "pointer" };
const menuMultipleStyles = {
  maxHeight: "180px",
  overflowY: "auto",
  width: "135px",
  margin: 0,
  borderTop: 0,
  background: "white",
  position: "absolute",
  zIndex: 1000,
  listStyle: "none",
  padding: 0,
  left: "340px",
};

const MultipleSelect = () => {
  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultipleSelection({ initialSelectedItems: [items[0], items[1]] });
  const getFilteredItems = (items: OptionType[]) =>
    items.filter((item) => item !== null && selectedItems.indexOf(item) < 0);

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    highlightedIndex,
    getItemProps,
    selectItem,
  } = useSelect({
    items: getFilteredItems(items),
    onStateChange: ({ type, selectedItem }) => {
      switch (type) {
        case useSelect.stateChangeTypes.MenuKeyDownEnter:
        case useSelect.stateChangeTypes.MenuKeyDownSpaceButton:
        case useSelect.stateChangeTypes.ItemClick:
        case useSelect.stateChangeTypes.MenuBlur:
          if (selectedItem) {
            addSelectedItem(selectedItem);
            selectItem(items[0]);
          }
          break;
        default:
          break;
      }
    },
  });
  return (
    <div>
      <label {...getLabelProps()}>Filter:</label>
      {selectedItems.map((selectedItem, index) => (
        <span
          style={selectedItemStyles}
          key={`selected-item-${index}`}
          {...getSelectedItemProps({ selectedItem, index })}
        >
          {selectedItem.label}
          <span
            style={selectedItemIconStyles}
            onClick={() => removeSelectedItem(selectedItem)}
          >
            &#10005;
          </span>
        </span>
      ))}
      <Button
        {...getToggleButtonProps(
          getDropdownProps({ preventKeyAction: isOpen })
        )}
      >
        {selectedItem?.label || "Filters"}
      </Button>
      <ul {...getMenuProps()} style={menuMultipleStyles}>
        {isOpen &&
          getFilteredItems(items).map((item, index) => (
            <li
              style={
                highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}
              }
              key={`${item}${index}`}
              {...getItemProps({ item, index })}
            >
              {item?.label}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default MultipleSelect;
