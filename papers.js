const papers = [
    {
        id: "rtnav",
        title: "RTNav: Towards Real-Time Zero-Shot Object Navigation",
        authors: [
            { name: "Lingyu Zhang*", highlight: true },
            { name: "Easop Lee*", url: "https://easoplee.github.io" },
            { name: "Boyuan Chen", url: "http://boyuanchen.com/" }
        ],
        venue: "Preprint 2026",
        image: "images/rtnav_D1.webp",
        links: [
            { type: "paper", url: "https://arxiv.org/abs/2608.26496" },
            { type: "project page", url: "https://generalroboticslab.com/RTNav" },
            { type: "video", url: "https://www.youtube.com/watch?v=YsEj6Qc_EqM" }
        ],
        summary: "VLM-driven agents have poor time-efficiency because they're sequential, we make it async.",
        description: "We find that recent foundation model-driven agents see significant performnace drop when evaluated under wall-clock time budgets instead of simulator step budgets. This is a result of optimizing for synchronous simulators, where the environment step waits for agent action, making inference time effectively free. We desgined RTNav, a modular asynchronous architecture where perception, mapping, planning and navigation runs at their own frequencies, achieving more time-efficient navigation."
    },

    {
        id: "humac",
        title: "Enabling Multi-Robot Collaboration from Single-Human Guidance",
        authors: [
            { name: "Zhengran Ji", url: "https://jzr01.github.io/" },
            { name: "Lingyu Zhang", highlight: true },
            { name: "Paul Sajda", url: "https://liinc.bme.columbia.edu/people/paul-sajda" },
            { name: "Boyuan Chen", url: "http://boyuanchen.com/" }
        ],
        venue: "ICRA 2025",
        image: "images/HUMAC.jpg",
        links: [
            { type: "paper", url: "https://arxiv.org/pdf/2409.19831" },
            { type: "project page", url: "http://www.generalroboticslab.com/blogs/blog/2024-09-29-humac/index.html" },
            { type: "video", url: "https://www.youtube.com/watch?v=2X92LnFTutY" }
        ],
        summary: "Multi-robot collaboration can be taught by a single person switching control.",
        description: "Enables multi-robot collaboration from single-human guidance. Inspired by the human theory-of-mind, we leverage human-robot interface that allows a single human to guide multiple robots simultaneously, through which collaborative behavior can be learned."
    },

    {
        id: "ideationeval",
        title: "Scientific Judgment Drifts Over Time in AI Ideation",
        authors: [
            { name: "Lingyu Zhang", highlight: true },
            { name: "Mitchell Wang" },
            { name: "Boyuan Chen", url: "http://boyuanchen.com/" }
        ],
        venue: "Preprint 2025",
        image: "images/idea_teaser.png",
        links: [
            { type: "paper", url: "https://arxiv.org/abs/2511.04964" },
            { type: "project page", url: "http://www.generalroboticslab.com/IdeationEval" },
            { type: "video", url: "https://www.youtube.com/watch?v=kiF7zdo6I8s" }
        ],
        summary: "Scientists’ ratings are often used as ground truth, but we find they are inconsistent.",
        description: "Research ideation systems driven by AI often assume human evaluation is a fixed gold standard. We challenge this assumption. In a two-wave study with 7,938 ratings from 63 researchers across six departments, we find that scientists’ ratings of the same idea are inconsistent when measured at different times. We discuss the implications and potential solutions for reliable evaluation of scientific ideas."
    },


    {
        id: "guide",
        title: "GUIDE: Real-Time Human-Shaped Agents",
        authors: [
            { name: "Lingyu Zhang", highlight: true },
            { name: "Zhengran Ji", url: "https://jzr01.github.io/" },
            { name: "Nicholas R Waytowich", url: "https://nicholaswaytowich.com/" },
            { name: "Boyuan Chen", url: "http://boyuanchen.com/" }
        ],
        venue: "Neurips 2024",
        image: "images/GUIDE.jpg",
        links: [
            { type: "paper", url: "https://openreview.net/pdf/4c5b77e64e14afd376d04a6edb956072c602816b.pdf" },
            { type: "project page", url: "http://www.generalroboticslab.com/blogs/blog/2024-10-21-guide/" },
            { type: "video", url: "https://www.youtube.com/watch?v=sMlvE9wYxj0" }
        ],
        summary: "Unlocking expressiveness of real-time evaluative feedback in human-guided RL.",
        description: "Real-time human-guided RL with dense continuous rewards and a learned feedback model to reduce human input and enable continual training. We also provide insights on what makes a good human trainer for agents."
    },

    {
        id: "crew",
        title: "CREW: Facilitating Human-AI Teaming",
        authors: [
            { name: "Lingyu Zhang", highlight: true },
            { name: "Zhengran Ji", url: "https://jzr01.github.io/" },
            { name: "Boyuan Chen", url: "http://boyuanchen.com/" }
        ],
        venue: "TMLR 2024",
        image: "images/crew-thumbnails.gif",
        links: [
            { type: "paper", url: "https://openreview.net/pdf?id=ZRXwHRXm8i" },
            { type: "project page", url: "http://www.generalroboticslab.com/blogs/blog/2024-08-01-crew/index.html" },
            { type: "video", url: "https://www.youtube.com/watch?v=RINSo3uI0dI" },
            { type: "documentation", url: "https://generalroboticslab.github.io/crew-docs/index.html" }
        ],
        summary: "A platform for Human-AI teaming supporting multimodal real-time feedback.",
        description: "We introduce a platform for Human-AI teaming research. CREW offers extensible environment design, enables real-time human-AI communication, supports hybrid Human-AI teaming, parallel sessions, multimodal feedback, and physiological data collection, and features ML community-friendly algorithm design."
    },

    {
        id: "equivariance",
        title: "Robust Perception through Equivariance",
        authors: [
            { name: "Chengzhi Mao", url: "https://www.cs.columbia.edu/~mcz/" },
            { name: "Lingyu Zhang", highlight: true },
            { name: "Abhishek Vaibhav Joshi" },
            { name: "Junfeng Yang", url: "https://www.cs.columbia.edu/~junfeng/" },
            { name: "Hao Wang", url: "http://www.wanghao.in/" },
            { name: "Carl Vondrick", url: "https://www.cs.columbia.edu/~vondrick/" }
        ],
        venue: "ICML 2023",
        image: "images/equi_pic.png",
        links: [
            { type: "paper", url: "https://proceedings.mlr.press/v202/mao23d.html" },
            { type: "project page", url: "https://equi4robust.cs.columbia.edu" }
        ],
        summary: "Natural images' intrinsinc constraints can improve vision model robustness at test-time.",
        description: "We introduce a framework that uses the dense intrinsic constraints in natural images to robustify inference, allowing the model to adjust dynamically to each individual image's unique and potentially novel characteristics at inference time."
    },

    {
        id: "robustvideo",
        title: "Adversarially Robust Video Perception by Seeing Motion",
        authors: [
            { name: "Lingyu Zhang*", highlight: true },
            { name: "Chengzhi Mao*", url: "https://www.cs.columbia.edu/~mcz/" },
            { name: "Junfeng Yang", url: "https://www.cs.columbia.edu/~junfeng/" },
            { name: "Carl Vondrick", url: "https://www.cs.columbia.edu/~vondrick/" }
        ],
        venue: "Preprint 2023",
        image: "images/robustvideo.png",
        hoverImage: "images/robust_video_vid.m4v",
        videoType: true,
        links: [
            { type: "paper", url: "https://arxiv.org/abs/2212.07815" },
            { type: "project page", url: "https://motion4robust.cs.columbia.edu" }
        ],
        summary: "Restoring motion consistency helps defending video classifiers at test time against attacks.",
        description: "We find that adversarial attacks generated for fooling video classifiers also collaterally corrupt motion. We propose to defend against attacks at test time by restoring disrupted motion."
    },

    // {
    //     id: "stereo",
    //     title: "A Stereo Matching Method for Three-Dimensional Eye Localization of Autostereoscopic Display",
    //     authors: [
    //         { name: "Bangpeng Xiao" },
    //         { name: "Shenyuan Ye" },
    //         { name: "Xicai Li" },
    //         { name: "Min Li" },
    //         { name: "Lingyu Zhang", highlight: true },
    //         { name: "Yuanqing Wang" }
    //     ],
    //     venue: "International Conference on Image and Graphics, 2021",
    //     image: "images/stereo_pic.png",
    //     links: [
    //         { type: "paper", url: "https://link.springer.com/chapter/10.1007/978-3-030-87361-5_3" }
    //     ],
    //     description: "We improve and optimize the ZNCC stereo matching algorithm for three-dimensional eye localization. We improve operation logic of the matching and optimize the scanning strategy based on the application scenarios."
    // }
];

// Function to render papers
function renderPapers() {
    const container = document.getElementById('papers-container');
    if (!container) return;

    container.innerHTML = papers.map(createPaperHTML).join('');
}

// Function to create HTML for a single paper
function createPaperHTML(paper) {
    const hasHover = paper.hoverImage;
    const authorHTML = paper.authors.map(author => {
        if (author.highlight) {
            return `<strong>${author.name}</strong>`;
        } else if (author.url) {
            return `<a href="${author.url}">${author.name}</a>`;
        } else {
            return author.name;
        }
    }).join(', ');

    const linksHTML = paper.links.map(link =>
        `<a href="${link.url}">${link.type === 'arxiv' ? 'arXiv' : link.type === 'project page' ? 'project' : link.type}</a>`
    ).join('\n                    ');

    const imageHTML = hasHover ? `
    <div class="one">
      <div class="two" id='${paper.id}_hover'>
        ${paper.videoType ? `
        <video width="100%" height="100%" muted loop playsinline preload="none"
          onmouseenter="this.play().catch(() => {})" onmouseleave="this.pause()">
          <source src="${paper.hoverImage}" type="video/mp4">
        </video>
        ` : `
        <img src='${paper.hoverImage}' width="96" height="80" decoding="async" alt="${paper.title}" loading="lazy">
        `}
      </div>
      <img src='${paper.image}' width="96" height="80" decoding="async" alt="${paper.title}" loading="lazy">
    </div>
  ` : `
    <img src='${paper.image}' width="96" height="80" decoding="async" alt="${paper.title}" loading="lazy">
  `;

    return `
              <!-- ${paper.id.toUpperCase()} Paper -->
              <tr class="paper-row">
                <td class="paper-content">
                  <h3 class="paper-title">${paper.title}</h3>
                  <div class="paper-authors">${authorHTML} <span class="paper-venue${/\bpreprint\b/i.test(paper.venue) ? '' : ' published'}">· ${paper.venue}</span></div>
                  <div class="paper-links">
                    ${linksHTML}
                  </div>
                  ${paper.summary ? `<p class="paper-summary">${paper.summary}</p>` : ''}
                </td>
                <td class="paper-image">
                  ${imageHTML}
                </td>
              </tr>
`;
}

// Auto-render when DOM is loaded
document.addEventListener('DOMContentLoaded', renderPapers);
