import React from 'react';
import Link from 'next/link';
import styles from './index.module.css';
import MDBBtn from './MDBbtn'
import ImageCollection from './imageCollection';
import Verizon from './Verizon';
import Statistics from './statistics'
import SearchGroup from './searchGroup';
import FeaturedGroup from './featuredGroup'

const images = [
    {
        src: "/images/page1/1.png",
        width: "40%",
        title: "Love Returns",
        comment: ""
    },
    {
        src: "/images/page1/2.png",
        width: "40%",
        title: "Snezeks Never Quit",
        comment: "LoveCampaign"
    },
    {
        src: "/images/page1/3.png",
        width: "90%",
        title: "Fit in and Rule",
        comment: "Dear Verizon"
    },
    {
        src: "/images/page1/4.png",
        width: "40%",
        title: "This is Exactly My World",
        comment: "WhiteWater"
    },
    {
        src: "/images/page1/5.png",
        width: "40%",
        title: "I Wish I Would Have at Least Tried",
        comment: "WomenWhoWork"
    },
]

const statistics = {
    "Stories_Told": 4234,
    "Affirmations_Given": 423
}

function Mobile() {
    return (
        <div className="flex flex-grow 2xl:p-0 pb-6 lg:flex-row flex-col">
            <div className={styles.screen1}></div>
            <div className="divider"></div>
            <div className="mt-8">
                <div className={"pl-4 m-auto lg:m-0 " + styles.slogan}>
                    A powerful story can change the world.
                </div>
                <MDBBtn color="elegant" className="MDBbtn btn-radius-10 ml-5 mt-4">
                    explore stories
                </MDBBtn>
            </div>
            <ImageCollection 
                images={images}
            />
            <Verizon />
            <Statistics statistics={statistics} />
            <SearchGroup />
            <FeaturedGroup />
        </div>
    );
}

export default Mobile;