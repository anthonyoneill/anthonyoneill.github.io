function set_nav_colours( backgroundColor, textColor ) {
    document.getElementsByTagName('nav')[0].style.backgroundColor = backgroundColor;
    document.getElementsByClassName('previous')[0].style.color = textColor;
    document.getElementsByClassName('home')[0].style.color = textColor;
    document.getElementsByClassName('next')[0].style.color = textColor;
}

const detectColorScheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    set_nav_colours('black', 'white');
  } else {
    set_nav_colours('white', 'black');
  }
}

detectColorScheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', detectColorScheme);
