const WEB3FORMS_KEY = 'ce2dcc1f-0d09-468a-b766-4b705783a131';

const translations = {
    pt: {
        skip: "Pular para o conteúdo", menu: "Menu", theme_label: "Modo escuro",
        nav_about: "Sobre", nav_skills: "Habilidades", nav_projects: "Projetos", nav_talk: "Contato",
        hero_role: "Desenvolvedora front-end e designer UX/UI",
        press_start: "Pressione start",
        about_title: "Sobre mim",
        about_p1: "Oi! Eu sou a Beatriz, tenho 17 anos e moro em Belo Horizonte. Gosto de desenhar e de programar, e mais ainda quando os dois se juntam: criar interfaces bonitas que funcionam de verdade.",
        about_p2: "Estou procurando meu primeiro emprego na área de TI. Trabalho com HTML, CSS, JavaScript, C# e SQL, desenho no Figma e tenho muita vontade de aprender com um time.",
        chip1: "Belo Horizonte, MG", chip2: "Aberta a propostas", chip3: "Procurando emprego em TI",
        selfie_alt: "Foto da Beatriz: cabelo ruivo cacheado e óculos de armação fina",
        skills_title: "Inventário", bag_code: "Código", bag_design: "Design", skill_design: "Design visual",
        projects_title: "Projetos", slot1: "Slot 1", slot2: "Slot 2 — vazio",
        p1_title: "Este portfólio",
        p1_desc: "Site pessoal em HTML, CSS e JavaScript puros, com tema claro e escuro, versão em português e inglês e formulário de contato funcionando.",
        see_live: "Ver o site", see_code: "Ver o código",
        empty_title: "Próximo projeto carregando",
        empty_desc: "Acompanhe o que estou construindo no meu GitHub.",
        see_github: "Abrir GitHub",
        resume_title: "Jornada",
        r1_title: "Início do curso de TI",
        r1_desc: "Começo da formação em tecnologia da informação.",
        r2_title: "Em andamento",
        r2_desc: "Seguindo no curso e construindo projetos de front-end e design.",
        talk_title: "Fale comigo",
        talk_sub: "Tem um projeto ou uma vaga? Me mande uma mensagem e eu respondo por e-mail.",
        form_name: "Seu nome", form_email: "Seu e-mail", form_msg: "Mensagem",
        form_send: "Enviar mensagem", form_sending: "Enviando…",
        sent: "Mensagem enviada. Respondo em breve no e-mail que você informou.",
        err_fields: "Preencha nome, um e-mail válido e a mensagem.",
        err_send: "A mensagem não foi enviada. Verifique sua conexão e tente de novo.",
        whatsapp: "WhatsApp",
        footer: "Feito por",
        lang_btn: "EN", lang_label: "Switch to English"
    },
    en: {
        skip: "Skip to content", menu: "Menu", theme_label: "Dark mode",
        nav_about: "About", nav_skills: "Skills", nav_projects: "Projects", nav_talk: "Contact",
        hero_role: "Front-end developer and UX/UI designer",
        press_start: "Press start",
        about_title: "About me",
        about_p1: "Hi! I'm Beatriz, I'm 17 and I live in Belo Horizonte, Brazil. I love drawing and I love coding, and my favorite place is where the two meet: building beautiful interfaces that really work.",
        about_p2: "I'm looking for my first job in tech. I work with HTML, CSS, JavaScript, C# and SQL, I design in Figma, and I'm eager to learn alongside a team.",
        chip1: "Belo Horizonte, Brazil", chip2: "Open to work", chip3: "Looking for a tech job",
        selfie_alt: "Photo of Beatriz: curly red hair and thin-framed glasses",
        skills_title: "Inventory", bag_code: "Code", bag_design: "Design", skill_design: "Visual design",
        projects_title: "Projects", slot1: "Slot 1", slot2: "Slot 2 — empty",
        p1_title: "This portfolio",
        p1_desc: "Personal site in plain HTML, CSS and JavaScript, with light and dark themes, Portuguese and English versions and a working contact form.",
        see_live: "See the site", see_code: "See the code",
        empty_title: "Next project loading",
        empty_desc: "Follow what I'm building on my GitHub.",
        see_github: "Open GitHub",
        resume_title: "Journey",
        r1_title: "Started IT course",
        r1_desc: "Beginning of my studies in information technology.",
        r2_title: "In progress",
        r2_desc: "Continuing the course and building front-end and design projects.",
        talk_title: "Talk to me",
        talk_sub: "Have a project or a role in mind? Send me a message and I'll reply by email.",
        form_name: "Your name", form_email: "Your email", form_msg: "Message",
        form_send: "Send message", form_sending: "Sending…",
        sent: "Message sent. I'll reply soon at the email you gave.",
        err_fields: "Fill in your name, a valid email and the message.",
        err_send: "The message wasn't sent. Check your connection and try again.",
        whatsapp: "WhatsApp",
        footer: "Made by",
        lang_btn: "PT", lang_label: "Mudar para português"
    }
};

const saved = localStorage.getItem('lang');
let lang = saved || (navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en');
const t = key => translations[lang][key];

const langBtn = document.getElementById('lang-btn');
function setLang(next) {
    lang = next;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const value = t(el.dataset.i18n);
        if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(el => {
        el.alt = t(el.dataset.i18nAlt);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        el.setAttribute('aria-label', t(el.dataset.i18nAria));
    });
    document.getElementById('lang-code').textContent = t('lang_btn');
    langBtn.setAttribute('aria-label', t('lang_label'));
}
langBtn.addEventListener('click', () => setLang(lang === 'pt' ? 'en' : 'pt'));

const themeBtn = document.getElementById('theme-btn');
function setTheme(dark) {
    document.body.classList.toggle('dark', dark);
    themeBtn.setAttribute('aria-pressed', String(dark));
    const icon = document.getElementById('theme-icon');
    icon.src = dark ? 'icons/sun.png' : 'icons/moon.png';
    icon.classList.toggle('spin');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
}
const savedTheme = localStorage.getItem('theme');
setTheme(savedTheme ? savedTheme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
themeBtn.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));

const menuBtn = document.getElementById('menu-btn');
const nav = document.getElementById('nav');
menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
}));

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
const sendBtn = document.getElementById('send-btn');

function showStatus(key, kind) {
    status.textContent = t(key);
    status.className = `form-status ${kind}`;
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const fields = [...form.querySelectorAll('input[required], textarea[required]')];
    fields.forEach(f => f.setAttribute('aria-invalid', String(!f.value.trim() || !f.checkValidity())));
    const firstBad = fields.find(f => f.getAttribute('aria-invalid') === 'true');
    if (firstBad) {
        showStatus('err_fields', 'err');
        firstBad.focus();
        return;
    }

    const data = Object.fromEntries(new FormData(form));
    sendBtn.disabled = true;
    sendBtn.textContent = t('form_sending');
    status.textContent = '';

    try {
        const res = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
                access_key: WEB3FORMS_KEY,
                subject: `Portfólio — mensagem de ${data.name}`,
                from_name: 'Portfólio Beatriz',
                name: data.name,
                email: data.email,
                replyto: data.email,
                message: data.message,
                botcheck: data.botcheck ? true : ''
            })
        });
        const json = await res.json();
        if (!res.ok || !json.success) throw new Error(json.message);
        form.reset();
        fields.forEach(f => f.removeAttribute('aria-invalid'));
        showStatus('sent', 'ok');
    } catch (err) {
        console.error('Web3Forms:', err);
        showStatus('err_send', 'err');
    } finally {
        sendBtn.disabled = false;
        sendBtn.textContent = t('form_send');
    }
});

document.querySelectorAll('.name > span').forEach((word, w) => {
    const text = word.textContent;
    word.setAttribute('aria-label', text);
    word.textContent = '';
    [...text].forEach((ch, i) => {
        const letter = document.createElement('span');
        letter.className = 'letter';
        letter.setAttribute('aria-hidden', 'true');
        letter.textContent = ch;
        letter.style.setProperty('--i', w * 7 + i);
        word.appendChild(letter);
    });
});

document.getElementById('year').textContent = new Date().getFullYear();
setLang(lang);

document.querySelectorAll('.btn, .start, .toggle, .menu-btn, .brand, .channel').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.remove('pressed');
        void el.offsetWidth;
        el.classList.add('pressed');
    });
    el.addEventListener('animationend', e => {
        if (e.animationName === 'press') el.classList.remove('pressed');
    });
});

const startBtn = document.querySelector('.start');
startBtn.addEventListener('animationend', e => {
    if (e.animationName === 'rise') startBtn.classList.add('settled');
});
