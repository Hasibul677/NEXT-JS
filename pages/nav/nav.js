import React from 'react';
import Link from "next/link"

const Nav = () => {
    return (
        <div>
            <ul>
                <Link href={"/"}><li>Home</li></Link>
                <Link href={"/news"}><li>News</li></Link>
                <Link href={"/contact"}><li>Contact</li></Link>
            </ul>
        </div>
    );
};

export default Nav;