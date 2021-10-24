import styled from "styled-components";
import { Tabs, Tab, TabPanel, TabList } from "react-tabs";

export const WapperTabs = styled(Tabs)`
  font-size: 16px;
  width: 50%;
  margin-top: 8px;
`;

WapperTabs.tabsRole = "Tabs";

export const WapperTab = styled(Tab)`
  border-radius: 16px;
  border: 1px solid #0DC0FC;
  padding: 12px;
  user-select: none;
  cursor: pointer;
  background-color: #fff;
  z-index: 99999;
  margin: 8px;

  &:focus {
    outline: none;
  }

  &.is-selected {
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-bottom: 1px solid #fff;
    box-shadow: 0 0 0.3em rgba(13, 192, 252, 0.5)
  }
`;

WapperTab.tabsRole = "Tab";


export const WapperTabPanel = styled(TabPanel)`
  display: none;
  padding: 16px;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3)
  margin-top: -5px;

  &.is-selected {
      display: block;
  }
`;

WapperTabPanel.tabsRole = "TabPanel";


export const WapperTabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`;

WapperTabList.tabsRole = "TabList";
