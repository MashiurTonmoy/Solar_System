const defaultVideos = [
  { title: "Solar System 101 | National Geographic", url: "https://www.youtube.com/embed/libKVRa01L8" },
  { title: "The Solar System for Kids | Homeschool Pop", url: "https://www.youtube.com/embed/mxzyANgHrS0" },
  { title: "Solar System for Kids | Exploring Space", url: "https://www.youtube.com/embed/iWNuW0_ycxc" },
  { title: "Planets in the Solar System for Kids | Learn Bright", url: "https://www.youtube.com/embed/e8YzKyot4Pc" },
  { title: "The Planet Song | KidsLearningTube", url: "https://www.youtube.com/embed/mQrlgH97v94" },
  { title: "Exploring Our Solar System: Planets and Space", url: "https://www.youtube.com/embed/Qd6nLM2QlWw" },
  { title: "Solar System & Planets for Kids | English Singsing", url: "https://www.youtube.com/embed/sD1-rS_TM2o" },
  { title: "Exploring Our Solar System! Science For Kids", url: "https://www.youtube.com/embed/oHahGWzLpl0" },
  { title: "Our Planet and The Solar System! | CBeebies", url: "https://www.youtube.com/embed/_LGvH-iuMS8" }
];


let videos = JSON.parse(localStorage.getItem("videos")) || defaultVideos;

function renderVideos() {
  const grid = document.getElementById("videoGrid");
  grid.innerHTML = "";

  videos.forEach(video => {
    grid.innerHTML += `
      <div class="video-card">
        <iframe src="${video.url}" allowfullscreen></iframe>
        <p>${video.title}</p>
      </div>
    `;
  });
}

function addVideo() {
  const title = document.getElementById("videoTitle").value;
  const url = document.getElementById("videoURL").value;

  if (!title || !url) {
    alert("Please fill all fields");
    return;
  }

  videos.push({ title, url });
  localStorage.setItem("videos", JSON.stringify(videos));
  renderVideos();

  document.getElementById("videoTitle").value = "";
  document.getElementById("videoURL").value = "";
}

renderVideos();
