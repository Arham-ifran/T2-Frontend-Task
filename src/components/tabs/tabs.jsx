import React, { useState } from 'react'
import TabNavItem from './tabContent'
import { Link } from 'react-router-dom';

const Tabs = () => {

    //states
    const [activeTab, setActiveTab] = useState("tab1");
    return (
        <div className="activity-tabs-title-sec">
            <ul className="nav-pills d-flex list-unstyled w-100 justify-content-center">
                <TabNavItem
                    title="Wallet Connect"
                    id="tab1"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    link='/'

                />
                <TabNavItem
                    title="Click Counter"
                    id="tab2"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    link='counter'
                />

                <TabNavItem
                    title="Cursor"
                    id="tab3"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    link='cursor'

                />
                <TabNavItem
                    title="Charater Counter"
                    id="tab4"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    link='CharacterCounter'

                />
                <TabNavItem
                    title="Pair Finder"
                    id="tab5"
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    link='PairFinder'

                />
            </ul>
        </div >
    )
}

export default Tabs