import style from "../styles/TabNav.module.css";
import{ useState } from "react";
import Description from "./Description";
import Promotions from "./Promotions";


{/*

export default function TabNav() {
    const [active, setActive] = useState(true);

    return <div className="components"> 
        <div className={style.tab_nav}>
            <button className={style.tab_nav_button} onClick={() => setActive(!active)}>
                Despre noi {String(active)}
            </button>
            {active && <div>
                <Description />
            </div>}
            {!active && <div></div>}
            <button className={style.tab_nav_button} onClick={() => setActive(!active)}>
                Promotii
            </button>
            {active && <div>
                <Promotions />
            </div>}
            {!active && <div></div>}
        </div>
    </div>
}

*/}


const App = () => {

    const ContentOne = (title) => {
        return (
            <div>
                Beauty and magic. The simple kind that is all around, of which we fail to see.  As long as I can remember, I have spent my time seeking it and wanting to create my own.  To share my passion and striving to always leave things better than I find them.  
                When people ask me, "What do you do for a living?",  "Flowers"  I say, smiling ear to ear.  The same smile I had as a child when my mother sent me to the garden for vegetables, watching my grandmother tend to her flowers, my father to the farm. Hands in the soil, one with the earth.
            </div>
        );
    };
    const ContentTwo = (title) => {
        return (
            <div>
                We are committed to offering only the finest floral arrangements and gifts, backed by service that is friendly and prompt. 
                Because all of our customers are important, our professional staff is dedicated to making your experience a pleasant one. 
                That is why we always go the extra mile to make your floral gift perfect.
                Our team’s goal:  To have flowers be an expression of who you are.  Incorporating the colors you love and the shapes you gravitate towards. 
                We strive to accomplish your vision and to make any wedding, event, delivery, or trip to the shop personal and special.  This was the magic I was meant to create. 
            </div>
        );
    };
    

    const tabContent = [
        {
            id: 1,
            heading: 'Our story',
            content: heading => <ContentOne title={heading} />,
        },
        {
            id: 2,
            heading: 'Our promise',
            content: heading => <ContentTwo title={heading} />
        },
   ];

    const [ activeTab, setActiveTab ] = useState(1);
    const [ currentTab, setCurrentTab ] = useState(tabContent[0]);

    function handleTabClick(currentTab){
        setActiveTab(currentTab);
        const currentTabContent = tabContent.filter(item => item.id === currentTab);
        setCurrentTab(currentTabContent[0]);
    };


    console.log(currentTab.content(currentTab.heading))
    return (
        <div className={style.tab_nav}>
                <div className={style.tab_nav_elements}>
                    {tabContent.map(item => {
                        return (
                            <div key={item.id} 
                                className={` 
                                    ${activeTab === item.id && '' }
                                `}
                                onClick={() => handleTabClick(item.id)}
                            >
                                <p className={style.tab_nav_button}>{item.heading}</p>
                            </div>
                        )
                    })}
                </div>
                <div className={style.current_tab}>
                    {currentTab.content().type(currentTab.heading)}
                </div>
        </div>
    )
};
export default App;
