export function navigateToId(id) {
    if (document.getElementById(id)) {
        window.scrollBy({ top: document.getElementById(id).getBoundingClientRect().top - document.getElementById('header_container').clientHeight, behavior: 'smooth' });
    }
}