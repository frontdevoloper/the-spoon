<script setup lang="ts">
function isAuth() {
    return false;
}
</script>

<template>
    <header>
        <nav class="navbar navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <NuxtLink class="navbar-brand" to="/">THE SPOON</NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar"
                    aria-labelledby="offcanvasDarkNavbarLabel">
                    <div class="offcanvas-header bg-dark">
                        <button href="#" class="btn text-white">Добавить рецепт</button>
                        <button v-if="isAuth()" href="#" class="btn text-white">Аккаунт</button>
                        <button v-else href="#" class="btn text-white">
                            <NuxtLink to="/auth">Войти</NuxtLink>
                        </button>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body bg-dark">
                        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Рецепты
                                </a>
                                <ul class="dropdown-menu dropdown-menu-dark">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Все рецепты</a></li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Авторы</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">База</a>
                            </li>
                        </ul>
                        <form class="d-flex mt-3" role="search">
                            <input class="form-control me-2" type="search" placeholder="Поиск" aria-label="Search">
                            <button class="btn btn-success" type="submit">Поиск</button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss"></style>