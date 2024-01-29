<template>
    <header>
        <div class="container">
            <h1>Test Table</h1>
            <a href="https://github.com/ophlop/table-task">
                <img src="https://api.iconify.design/logos:github-icon.svg" alt="github logo" />
            </a>
        </div>
    </header>
</template>

<style scoped>
header {
    width: 100%;
    height: 70px;
    box-sizing: border-box;
    padding: 10px;

    background-color: #eee;
    display: flex;
    align-items: center;
}

.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

a {
    transition: all 0.2s ease-in-out;
}

a:hover {
    transform: scale(1.2);
}

img {
    width: 36px;
    height: 36px;
}

h1 {
    margin: 0;
}
</style>