<template>
    <header class="page-header">
        <div class="container page-header__content">
            <h1 class="page-header__title">Test Table</h1>
            <a class="page-header__github-link" href="https://github.com/ophlop/table-task">
                <img
                    src="https://api.iconify.design/logos:github-icon.svg"
                    alt="github logo"
                    class="page-header__github-icon"
                />
            </a>
        </div>
    </header>
</template>

<style scoped>
.page-header {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: 30px;
    background-color: #eee;
    display: flex;
    align-items: center;
}

.page-header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.page-header__title {
    margin: 0;
}

.page-header__github-link {
    transition: all 0.2s ease-in-out;
}

.page-header__github-link:hover {
    transform: scale(1.2);
}

.page-header__github-icon {
    width: 36px;
    height: 36px;
}
</style>