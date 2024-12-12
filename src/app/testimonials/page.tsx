"use client";

import React, { useEffect } from "react";

const TestimonialsPage = () => {
    useEffect(() => {
        // Dynamically load the iframe resizer script
        const script = document.createElement("script");
        script.src = "https://testimonial.to/js/iframeResizer.min.js";
        script.type = "text/javascript";
        script.onload = () => {
            // Initialize iframeResizer after script loads
            (window as any).iFrameResize?.(
                { log: false, checkOrigin: false },
                "#testimonialto-viralvisions-tag-all-light"
            );
        };
        document.body.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div style={{ width: "100%", maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
            <h1>Wall of Love</h1>
            <iframe
                id="testimonialto-viralvisions-tag-all-light"
                src="https://embed-v2.testimonial.to/w/viralvisions?theme=light&card=small&loadMore=on&initialCount=20&randomize=on&tag=all"
                frameBorder="0"
                scrolling="no"
                width="100%"
                style={{ border: "0", minHeight: "500px" }}
            ></iframe>
        </div>
    );
};

export default TestimonialsPage;