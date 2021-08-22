import { useEffect, useState } from "react";
import {
    ScrollLink
} from "./styledScrollupLink";

export const ScrollupLink = () => {
    const [showScroll, setShowScroll] = useState(false);
    const showScrollLink = () => window.scrollY > 300 ? setShowScroll(true) : setShowScroll(false);

    useEffect(() => {
        window.addEventListener('scroll', showScrollLink);
    }, []);

    return (
        <ScrollLink showScroll={showScroll} href="#">
            <i className="ri-arrow-up-s-line"></i>
        </ScrollLink>
    );
};