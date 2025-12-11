// app.js
// Place these three files in the same folder and open index.html in a browser.
// Replace placeholder IDs in the playlists object with real YouTube video IDs (the part after ?v=).

const playlists = {
  "bollywood": {
    name: "Bollywood Superhits",
    // Replace BOLLY_ID_01 etc. with real YouTube IDs
    list: [
      {id:"BOLLY_ID_01", title:"Bollywood Hit 1", artist:"Artist A", dur:"4:12"},
      {id:"BOLLY_ID_02", title:"Bollywood Hit 2", artist:"Artist B", dur:"3:52"},
      {id:"BOLLY_ID_03", title:"Bollywood Hit 3", artist:"Artist C", dur:"4:05"},
      {id:"BOLLY_ID_04", title:"Bollywood Hit 4", artist:"Artist D", dur:"3:41"},
      {id:"BOLLY_ID_05", title:"Bollywood Hit 5", artist:"Artist E", dur:"5:01"},
      {id:"BOLLY_ID_06", title:"Bollywood Hit 6", artist:"Artist F", dur:"3:33"},
      {id:"BOLLY_ID_07", title:"Bollywood Hit 7", artist:"Artist G", dur:"4:22"},
      {id:"BOLLY_ID_08", title:"Bollywood Hit 8", artist:"Artist H", dur:"3:58"},
      {id:"BOLLY_ID_09", title:"Bollywood Hit 9", artist:"Artist I", dur:"4:10"},
      {id:"BOLLY_ID_10", title:"Bollywood Hit 10", artist:"Artist J", dur:"3:47"},
      {id:"BOLLY_ID_11", title:"Bollywood Hit 11", artist:"Artist K", dur:"3:56"},
      {id:"BOLLY_ID_12", title:"Bollywood Hit 12", artist:"Artist L", dur:"4:02"},
      {id:"BOLLY_ID_13", title:"Bollywood Hit 13", artist:"Artist M", dur:"4:18"},
      {id:"BOLLY_ID_14", title:"Bollywood Hit 14", artist:"Artist N", dur:"3:39"},
      {id:"BOLLY_ID_15", title:"Bollywood Hit 15", artist:"Artist O", dur:"4:07"},
      {id:"BOLLY_ID_16", title:"Bollywood Hit 16", artist:"Artist P", dur:"3:54"},
      {id:"BOLLY_ID_17", title:"Bollywood Hit 17", artist:"Artist Q", dur:"3:44"},
      {id:"BOLLY_ID_18", title:"Bollywood Hit 18", artist:"Artist R", dur:"4:21"},
      {id:"BOLLY_ID_19", title:"Bollywood Hit 19", artist:"Artist S", dur:"4:00"},
      {id:"BOLLY_ID_20", title:"Bollywood Hit 20", artist:"Artist T", dur:"3:36"},
      {id:"BOLLY_ID_21", title:"Bollywood Hit 21", artist:"Artist U", dur:"4:25"},
      {id:"BOLLY_ID_22", title:"Bollywood Hit 22", artist:"Artist V", dur:"3:50"},
      {id:"BOLLY_ID_23", title:"Bollywood Hit 23", artist:"Artist W", dur:"4:09"},
      {id:"BOLLY_ID_24", title:"Bollywood Hit 24", artist:"Artist X", dur:"3:58"},
      {id:"BOLLY_ID_25", title:"Bollywood Hit 25", artist:"Artist Y", dur:"4:33"}
    ]
  },

  "hollywood": {
    name: "Hollywood Superhits",
    // Replace HOLLY_ID_01 etc. with real YouTube IDs
    list: [
      {id:"HOLLY_ID_01", title:"Hollywood Hit 1", artist:"Artist AA", dur:"3:40"},
      {id:"HOLLY_ID_02", title:"Hollywood Hit 2", artist:"Artist BB", dur:"4:02"},
      {id:"HOLLY_ID_03", title:"Hollywood Hit 3", artist:"Artist CC", dur:"3:58"},
      {id:"HOLLY_ID_04", title:"Hollywood Hit 4", artist:"Artist DD", dur:"4:15"},
      {id:"HOLLY_ID_05", title:"Hollywood Hit 5", artist:"Artist EE", dur:"3:22"},
      {id:"HOLLY_ID_06", title:"Hollywood Hit 6", artist:"Artist FF", dur:"3:59"},
      {id:"HOLLY_ID_07", title:"Hollywood Hit 7", artist:"Artist GG", dur:"4:07"},
      {id:"HOLLY_ID_08", title:"Hollywood Hit 8", artist:"Artist HH", dur:"3:30"},
      {id:"HOLLY_ID_09", title:"Hollywood Hit 9", artist:"Artist II", dur:"4:20"},
      {id:"HOLLY_ID_10", title:"Hollywood Hit 10", artist:"Artist JJ", dur:"3:46"},
      {id:"HOLLY_ID_11", title:"Hollywood Hit 11", artist:"Artist KK", dur:"3:55"},
      {id:"HOLLY_ID_12", title:"Hollywood Hit 12", artist:"Artist LL", dur:"4:12"},
      {id:"HOLLY_ID_13", title:"Hollywood Hit 13", artist:"Artist MM", dur:"3:49"},
      {id:"HOLLY_ID_14", title:"Hollywood Hit 14", artist:"Artist NN", dur:"3:37"},
      {id:"HOLLY_ID_15", title:"Hollywood Hit 15", artist:"Artist OO", dur:"4:03"},
      {id:"HOLLY_ID_16", title:"Hollywood Hit 16", artist:"Artist PP", dur:"3:58"},
      {id:"HOLLY_ID_17", title:"Hollywood Hit 17", artist:"Artist QQ", dur:"4:01"},
      {id:"HOLLY_ID_18", title:"Hollywood Hit 18", artist:"Artist RR", dur:"3:44"},
      {id:"HOLLY_ID_19", title:"Hollywood Hit 19", artist:"Artist SS", dur:"3:50"},
      {id:"HOLLY_ID_20", title:"Hollywood Hit 20", artist:"Artist TT", dur:"4:18"},
      {id:"HOLLY_ID_21", title:"Hollywood Hit 21", artist:"Artist UU", dur:"3:31"},
      {id:"HOLLY_ID_22", title:"Hollywood Hit 22", artist:"Artist VV", dur:"4:05"},
      {id:"HOLLY_ID_23", title:"Hollywood Hit 23", artist:"Artist WW", dur:"3:39"},
      {id:"HOLLY_ID_24", title:"Hollywood Hit 24", artist:"Artist XX", dur:"4:08"},
      {id:"HOLLY_ID_25", title:"Hollywood Hit 25", artist:"Artist YY", dur:"3:53"}
    ]
  },

  // 90s, 80s, 2000s, 2000-2010, 2010-2020, 2020-2025
  // The arrays below use placeholder ids named clearly (e.g. "90S_ID_01").
"90s": {
  name: "90's Superhits",
  list: [
    {
      id: "pIgZ7gMze7A",
      title: "Backstreet Boys – Everybody (Backstreet's Back)",
      artist: "Backstreet Boys",
      dur: "04:46"
    },
    {
      id: "fPO76Jlnz6c",
      title: "Rick Astley – Never Gonna Give You Up",
      artist: "Rick Astley",
      dur: "03:32"
    },
    {
      id: "C-u5WLJ9Yk4",
      title: "Aqua – Barbie Girl",
      artist: "Aqua",
      dur: "03:20"
    },
    {
      id: "2Vv-BfVoq4g",
      title: "Bryan Adams – (Everything I Do) I Do It For You",
      artist: "Bryan Adams",
      dur: "06:38"
    },
    {
      id: "OMOGaugKpzs",
      title: "Ace of Base – All That She Wants",
      artist: "Ace of Base",
      dur: "03:33"
    },
    {
      id: "TUVcZfQe-Kw",
      title: "Michael Jackson – They Don’t Care About Us",
      artist: "Michael Jackson",
      dur: "04:43"
    },
    {
      id: "FTQbiNvZqaY",
      title: "a-ha – Take On Me",
      artist: "a-ha",
      dur: "03:48"
    },
    {
      id: "Zi_XLOBDo_Y",
      title: "Michael Jackson – Billie Jean",
      artist: "Michael Jackson",
      dur: "04:57"
    },
    {
      id: "f6A6R1VU8-Y",
      title: "Haddaway – What Is Love",
      artist: "Haddaway",
      dur: "04:30"
    },
    {
      id: "R5b_7X0QXj4",
      title: "Dr. Alban – It's My Life",
      artist: "Dr. Alban",
      dur: "04:02"
    },
    {
      id: "aWmkuH1k7uA",
      title: "Eiffel 65 – Blue (Da Ba Dee)",
      artist: "Eiffel 65",
      dur: "03:40"
    },
    {
      id: "KXewIR7Y7cc",
      title: "Backstreet Boys – I Want It That Way",
      artist: "Backstreet Boys",
      dur: "03:40"
    },
    {
      id: "SdhAfMor9BM",
      title: "Los Del Rio – Macarena",
      artist: "Los Del Rio",
      dur: "04:19"
    },
    {
      id: "y6120QOlsfU",
      title: "Darude – Sandstorm",
      artist: "Darude",
      dur: "03:48"
    },
    {
      id: "Q-L5-vZ7LT8",
      title: "La Bouche – Be My Lover",
      artist: "La Bouche",
      dur: "04:00"
    },
    {
      id: "6Ejga4kJUts",
      title: "Era – Ameno",
      artist: "Era",
      dur: "03:44"
    },
    {
      id: "6hzrDeceEKc",
      title: "Nirvana – Smells Like Teen Spirit",
      artist: "Nirvana",
      dur: "04:39"
    },
    {
      id: "Qk2yeGkG-5I",
      title: "Shania Twain – Man! I Feel Like A Woman!",
      artist: "Shania Twain",
      dur: "03:55"
    },
    {
      id: "yKNxeF4KMsY",
      title: "Coldplay – Yellow",
      artist: "Coldplay",
      dur: "04:32"
    },
    {
      id: "kJQP7kiw5Fk",
      title: "Los Lobos – La Bamba",
      artist: "Los Lobos",
      dur: "02:52"
    },
    {
      id: "0yW7w8F2TVA",
      title: "Dr Dre – Still D.R.E.",
      artist: "Dr. Dre & Snoop Dogg",
      dur: "04:44"
    },
    {
      id: "ngRq82c8B8Y",
      title: "The Cranberries – Zombie",
      artist: "The Cranberries",
      dur: "04:11"
    },
    {
      id: "0-EQ0b0j8eE",
      title: "Spice Girls – Wannabe",
      artist: "Spice Girls",
      dur: "02:53"
    },
    {
      id: "gGdGFtwCNBE",
      title: "blink-182 – All the Small Things",
      artist: "blink-182",
      dur: "02:48"
    },
    {
      id: "fPO76Jlnz6c",
      title: "Seal – Kiss From a Rose",
      artist: "Seal",
      dur: "04:48"
    }
  ]
}
,

  "80s": {
    name: "80's Superhits",
    list: Array.from({length:25}).map((_,i)=>({
      id:`80S_ID_${String(i+1).padStart(2,"0")}`,
      title:`80s Hit ${i+1}`, artist:`80s Artist ${i+1}`, dur:`${3+Math.floor(Math.random()*2)}:${(20+Math.floor(Math.random()*40)).toString().padStart(2,"0")}`
    }))
  },

  "2000s": {
    name: "2000's Superhits",
    list: Array.from({length:25}).map((_,i)=>({
      id:`2000S_ID_${String(i+1).padStart(2,"0")}`,
      title:`2000s Hit ${i+1}`, artist:`2000s Artist ${i+1}`, dur:`${3+Math.floor(Math.random()*2)}:${(20+Math.floor(Math.random()*40)).toString().padStart(2,"0")}`
    }))
  },

  "2000-2010": {
    name: "2000-2010 Superhits",
    list: Array.from({length:25}).map((_,i)=>({
      id:`2000_2010_ID_${String(i+1).padStart(2,"0")}`,
      title:`2000-2010 Hit ${i+1}`, artist:`Artist ${i+1}`, dur:`${3+Math.floor(Math.random()*2)}:${(10+Math.floor(Math.random()*50)).toString().padStart(2,"0")}`
    }))
  },

  "2010-2020": {
    name: "2010-2020 Superhits",
    list: Array.from({length:25}).map((_,i)=>({
      id:`2010_2020_ID_${String(i+1).padStart(2,"0")}`,
      title:`2010-2020 Hit ${i+1}`, artist:`Artist ${i+1}`, dur:`${3+Math.floor(Math.random()*2)}:${(10+Math.floor(Math.random()*50)).toString().padStart(2,"0")}`
    }))
  },

  "2020-2025": {
    name: "2020-2025 Superhits",
    list: Array.from({length:25}).map((_,i)=>({
      id:`2020_2025_ID_${String(i+1).padStart(2,"0")}`,
      title:`2020-25 Hit ${i+1}`, artist:`Artist ${i+1}`, dur:`${2+Math.floor(Math.random()*3)}:${(10+Math.floor(Math.random()*50)).toString().padStart(2,"0")}`
    }))
  }
};

// -------- UI logic (same behavior as single-file version) ----------
const categories = Object.keys(playlists);
const catsWrap = document.getElementById('categoryButtons');
const trackList = document.getElementById('trackList');
const catTitle = document.getElementById('catTitle');
const catSub = document.getElementById('catSub');
const tracksCount = document.getElementById('tracksCount');
const ytPlayer = document.getElementById('ytPlayer');
const nowTitle = document.getElementById('nowTitle');
const nowArtist = document.getElementById('nowArtist');
const nowThumb = document.getElementById('nowThumb');

let activeCat = null;
let activeTrackIndex = null;

// create category buttons
categories.forEach((key, idx) => {
  const btn = document.createElement('button');
  btn.className = 'cat-btn';
  btn.textContent = playlists[key].name;
  btn.dataset.cat = key;
  btn.addEventListener('click', () => selectCategory(key, btn));
  catsWrap.appendChild(btn);
});

// auto-select first category
selectCategory(categories[0]);

function selectCategory(catKey) {
  activeCat = catKey;
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.cat === catKey));
  renderTracks(playlists[catKey].list);
  catTitle.textContent = playlists[catKey].name;
  catSub.textContent = `— ${playlists[catKey].list.length} tracks`;
  tracksCount.textContent = `${playlists[catKey].list.length} tracks`;
  activeTrackIndex = null;
  setNow(null);
}

function renderTracks(list) {
  trackList.innerHTML = '';
  if(!list || !list.length){ trackList.innerHTML = '<div class="placeholder">No tracks in this category.</div>'; return; }
  list.forEach((t, i) => {
    const row = document.createElement('div');
    row.className = 'track';
    row.tabIndex = 0;
    row.dataset.idx = i;
    row.innerHTML = `
      <div class="t-left">
        <div class="idx">${String(i+1).padStart(2,'0')}</div>
        <div class="meta">
          <div class="tt">${escapeHtml(t.title)}</div>
          <div class="sub">${escapeHtml(t.artist)}</div>
        </div>
      </div>
      <div class="t-right">
        <a class="play-link" href="#" data-id="${t.id}">Play ▶</a>
        <div class="dur">${t.dur||''}</div>
      </div>
    `;
    row.addEventListener('click', (e) => {
      if(e.target.tagName.toLowerCase()==='a') { e.preventDefault(); }
      const id = t.id;
      playTrack(id, i, t);
      markActive(i);
    });
    row.addEventListener('keydown', (e) => { if(e.key==='Enter' || e.key===' ') { e.preventDefault(); row.click(); }});
    trackList.appendChild(row);
  });
}

function playTrack(videoId, index, meta){
  if(!videoId) {
    return alert('No video ID present.');
  }

  // placeholder check (simple)
  if (videoId.includes('_ID_')) {
    return alert('This track uses a placeholder ID — update it with a real YouTube video or playlist ID.');
  }

  // detect if it is a YouTube playlist ID (usually longer than 11 or starts with PL)
  const isPlaylist = videoId.startsWith("PL");

  let src = "";
  if (isPlaylist) {
    src = `https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1`;
  } else {
    src = `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`;
  }

  ytPlayer.src = src;
  setNow(meta);
  activeTrackIndex = index;
  markActive(index);
}


function setNow(meta){
  if(!meta){ nowTitle.textContent = 'Nothing playing'; nowArtist.textContent = 'Select a track'; nowThumb.textContent = '🎵'; return; }
  nowTitle.textContent = meta.title;
  nowArtist.textContent = meta.artist;
  nowThumb.textContent = meta.title.split(' ').slice(0,2).map(s=>s[0]||'').join('').toUpperCase();
}

function markActive(index){
  document.querySelectorAll('.track').forEach((el, i) => {
    el.classList.toggle('active', i===index);
  });
}

function escapeHtml(str){
  if(!str) return '';
  return str.replace(/[&<>"]/g, s=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;' })[s]);
}
