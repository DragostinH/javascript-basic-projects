const sideBarToggle = (() => {
    const toggleBtn = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    toggleBtn.onclick = ()=>{
        sidebar.classList.toggle('show-sidebar')
    }

    closeBtn.onclick = ()=>{
        sidebar.classList.remove('show-sidebar');
    }
})()