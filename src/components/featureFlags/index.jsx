import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkMode from '../lightDarkMode/index';
import TicTacToe from '../ticTacToe/index';
import RandomColor from '../randomColor/index';
import Accordion from '../accordion/index';
import TreeView from '../treeView/index';
import menus from '../treeView/data';
import TabParent from '../customTabs/TabParent';

export default function FeatureFlags() {

    const { loading, enabledFlags } = useContext(FeatureFlagsContext);

    const componentsToRender = [
        {
            key: 'showLightDarkMode',
            component: <LightDarkMode />
        },
        {
            key: 'showTicTacToeBoard',
            component: <TicTacToe />
        },
        {
            key: 'showRandomColorGenerator',
            component: <RandomColor />
        },
        {
            key: 'showAccordion',
            component: <Accordion />
        },
        {
            key: 'showTreeView',
            component: <TreeView menus={menus} />
        },
        {
            key: 'showTabs',
            component: <TabParent />
        }
    ]

    function checkEnabledFlags(currentKey) {
        return enabledFlags[currentKey];
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>Feature Flags</h1>
            {
                componentsToRender.map(componentItem => (
                    checkEnabledFlags(componentItem.key)
                        ? componentItem.component
                        : null
                ))
            }
        </div>
    )
}