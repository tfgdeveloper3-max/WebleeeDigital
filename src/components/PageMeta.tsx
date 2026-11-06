import { useEffect } from "react";

type PageMetaProps = {
    title: string;
    description: string;
    /** Optional canonical path, e.g. "/services/custom-website" */
    path?: string;
};

const SITE_NAME = "Weblee Digital";
const BASE_URL = "https://www.webleedigital.com";

function setMetaTag(attr: "name" | "property", key: string, content: string) {
    let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
    if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute("content", content);
}

function setCanonical(href: string) {
    let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", "canonical");
        document.head.appendChild(el);
    }
    el.setAttribute("href", href);
}

export default function PageMeta({ title, description, path }: PageMetaProps) {
    useEffect(() => {
        const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
        document.title = fullTitle;

        setMetaTag("name", "description", description);
        setMetaTag("property", "og:title", fullTitle);
        setMetaTag("property", "og:description", description);
        setMetaTag("property", "og:site_name", SITE_NAME);
        setMetaTag("name", "twitter:card", "summary_large_image");
        setMetaTag("name", "twitter:title", fullTitle);
        setMetaTag("name", "twitter:description", description);

        if (path) {
            const url = `${BASE_URL}${path}`;
            setMetaTag("property", "og:url", url);
            setCanonical(url);
        }
    }, [title, description, path]);

    return null;
}