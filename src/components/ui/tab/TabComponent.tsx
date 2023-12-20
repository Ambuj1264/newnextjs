// components/Tabs.js
import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from 'react';

const TabComponent = ({ tabs }:any) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="">
      <div className="flex border-b">
        {tabs.map((tab: { id:string; label: string }) => (
          <button
            key={tab.id}
            className={`px-4  ${activeTab === tab.id ?"font-bold text-[#0A84FF]":"font-medium text-[#666]"} text-xl py-2 ${activeTab === tab.id ? 'border-b-4 border-blue-500' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.map((tab: { id:string; content: string  }) => (
          <div key={tab.id} className={`${activeTab === tab.id ? '' : 'hidden'}`}>
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
