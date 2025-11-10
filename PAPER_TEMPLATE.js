/**
 * PAPER TEMPLATE - Copy this to papers.js to add a new paper
 * 
 * Instructions:
 * 1. Copy this entire template
 * 2. Open papers.js
 * 3. Paste it into the papers array (add a comma after the previous paper)
 * 4. Fill in your paper's information
 * 5. Delete any optional fields you don't need
 * 6. Save and refresh your website!
 */

{
    // REQUIRED: Unique identifier (lowercase, no spaces, use underscores)
    id: "mypaper2025",

        // REQUIRED: Full paper title
        title: "My Amazing Research Paper Title",

            // REQUIRED: List of authors
            authors: [
                // Author with link to their website
                { name: "First Author", url: "https://firstauthor.com" },

                // You (will be bold) - use highlight: true
                { name: "Your Name", highlight: true },

                // Author without link (just name, no url field)
                { name: "Last Author" },

                // For equal contribution, add asterisk to name
                { name: "Equal Contrib Author*", url: "https://..." }
            ],

                // REQUIRED: Venue and year
                venue: "ICRA 2025",
                    // Examples: "NeurIPS 2024", "CVPR 2025", "TMLR 2024", "Preprint 2024"

                    // REQUIRED: Path to thumbnail image (put image in images/ folder)
                    image: "images/mypaper.jpg",

                        // OPTIONAL: Hover image or video (appears when you hover over the thumbnail)
                        // Delete these two lines if you don't want hover effect
                        hoverImage: "images/mypaper_animated.gif",
                            videoType: false,  // Set to true if hoverImage is a video (.mp4, .m4v)

                                // REQUIRED: Paper links (arxiv, project page, video, code, etc.)
                                links: [
                                    { type: "paper", url: "https://..." },        // Published paper
                                    { type: "arxiv", url: "https://arxiv.org/abs/..." },
                                    { type: "project page", url: "https://..." },
                                    { type: "video", url: "https://youtube.com/..." },
                                    { type: "code", url: "https://github.com/..." },
                                    { type: "dataset", url: "https://..." },
                                    { type: "slides", url: "https://..." }
                                ],

                                    // REQUIRED: Brief description of your work
                                    description: "Write a 2-3 sentence description of your paper here. Explain the problem, your approach, and key results. Keep it concise but informative."
}

/* ============================================================
   QUICK EXAMPLES
   ============================================================ */

// EXAMPLE 1: Simple paper with just arxiv and code
{
    id: "simpleproject",
        title: "A Simple Approach to Complex Problems",
            authors: [
                { name: "Jane Doe", url: "https://janedoe.com" },
                { name: "Your Name", highlight: true }
            ],
                venue: "CVPR 2025",
                    image: "images/simple.png",
                        links: [
                            { type: "arxiv", url: "https://arxiv.org/abs/1234.5678" },
                            { type: "code", url: "https://github.com/username/simple-project" }
                        ],
                            description: "We propose a surprisingly simple method that achieves state-of-the-art results. Our approach is efficient and easy to implement."
}

// EXAMPLE 2: Paper with animated GIF on hover
{
    id: "animated_project",
        title: "Dynamic Visual Learning",
            authors: [
                { name: "Your Name", highlight: true },
                { name: "Collaborator", url: "https://collab.edu" }
            ],
                venue: "ICCV 2025",
                    image: "images/dynamic_thumb.jpg",
                        hoverImage: "images/dynamic_demo.gif",
                            videoType: false,
                                links: [
                                    { type: "paper", url: "https://..." },
                                    { type: "project page", url: "https://myproject.github.io" }
                                ],
                                    description: "We introduce a novel dynamic learning approach with impressive visual results. See our project page for interactive demos."
}

// EXAMPLE 3: Paper with video on hover
{
    id: "robot_demo",
        title: "Learning Robot Manipulation",
            authors: [
                { name: "Your Name", highlight: true }
            ],
                venue: "RSS 2025",
                    image: "images/robot_static.jpg",
                        hoverImage: "images/robot_demo.m4v",
                            videoType: true,
                                links: [
                                    { type: "arxiv", url: "https://arxiv.org/abs/..." },
                                    { type: "video", url: "https://youtube.com/..." },
                                    { type: "code", url: "https://github.com/..." }
                                ],
                                    description: "We demonstrate robust robotic manipulation in challenging real-world scenarios using vision-based learning."
}

// EXAMPLE 4: Equal contribution authors
{
    id: "joint_work",
        title: "Collaborative Research Project",
            authors: [
                { name: "First Author*", url: "https://first.com", highlight: true },
                { name: "Second Author*", url: "https://second.com" },
                { name: "Senior Author", url: "https://senior.com" }
            ],
                venue: "NeurIPS 2024",
                    image: "images/collab.png",
                        links: [
                            { type: "paper", url: "https://..." }
                        ],
                            description: "A collaborative effort that combines multiple perspectives. Equal contribution from first two authors."
}
