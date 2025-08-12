
(function(){
	const THEME_KEY='kdl_theme';
	const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	const saved = localStorage.getItem(THEME_KEY);
	const theme = saved || (prefersDark ? 'dark' : 'light');
	document.documentElement.setAttribute('data-theme', theme);
	function applyLogo(){
		const img = document.querySelector('header img');
		if(!img) return;
		const isDark = document.documentElement.getAttribute('data-theme')==='dark';
		const src = isDark ? 'assets/logo-dark.svg' : 'assets/logo.svg';
		img.setAttribute('src', src);
		img.setAttribute('alt', 'KDL logo');
	}
	function updateButtons(){
		document.querySelectorAll('[data-theme-toggle]').forEach(btn=>{
			btn.textContent = (document.documentElement.getAttribute('data-theme')==='dark') ? '☀ Light' : '🌙 Dark';
		});
	}
	applyLogo(); updateButtons();
	document.addEventListener('click', function(e){
		const t = e.target.closest('[data-theme-toggle]');
		if(!t) return;
		const cur = document.documentElement.getAttribute('data-theme')==='dark' ? 'light':'dark';
		document.documentElement.setAttribute('data-theme', cur);
		localStorage.setItem(THEME_KEY, cur);
		applyLogo(); updateButtons();
	});
})();
