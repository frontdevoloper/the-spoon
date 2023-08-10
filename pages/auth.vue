<script setup lang="ts">
    let isClicked = ref(true);

    function setIsClicked() {
        isClicked.value = !isClicked.value;
    }

    function clickedSignUpButton() {
        isClicked.value = true;
    }
</script>

<template>
    <div :class="{ 'slide' : isClicked }" class="body">
        <div class="container-form">
            <div class="form_box form_signin">
                <h2>У вас уже есть аккаунт?</h2>
                <button @click.prevent="setIsClicked" class="signinBtn">Войти</button>
            </div>
            <div class="form_box signup">
                <h2>У вас нет аккаунта?</h2>
                <button @click.prevent="clickedSignUpButton" class="signupBtn">Зарегестрироваться</button>
            </div>
            <div class="formBx">
                <div class="formBx__form signinForm">
                    <form action="">
                        <h3>Авторизация</h3>
                        <input type="text" placeholder="Логин">
                        <input type="password" placeholder="Пароль">
                        <input type="submit" value="Войти">
                        <a href="#" class="forgot">Забыл пароль</a>
                    </form>
                </div>
                <div class="formBx__form signupForm">
                    <form>
                        <h3>Регестрация</h3>
                        <input type="text" placeholder="Логин">
                        <input type="email" name="email" id="email-input" placeholder="Почта">
                        <input type="password" placeholder="Пароль">
                        <input type="password" placeholder="Повторите пароль">
                        <input type="submit" value="Зарегестрироваться">                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

.body {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: #03a9f4;
    transition: 1s;
}

.slide {
    background: #f43648;
}

.container-form {
    position: relative;
    width: 800px;
    height: 400px;
    background: rgba(0, 0, 0, 0.125);
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-form .form_box {
    position: relative;
    width: 50%;
    height: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px;
}

.container-form .form_box h2 {
    color: #fff;
    font-weight: 500;
    font-size: 1.2em;
    margin-bottom: 10px;
}

.container-form .form_box button {
    cursor: pointer;
    padding: 10px 20px;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    border: none;
    outline: none;
}

.formBx {
    background: #fff;
    left: 50px;
    position: absolute;
    width: 350px;
    height: 480px;
    z-index: 1000;
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.15);
    transition: .5s;
    transition-delay: .5s;
    overflow: hidden;
}

.slide .formBx {
    left: 400px;
}

.formBx .formBx__form {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .5s;
    background: #fff;
}

.formBx .formBx__form form {
    display: flex;
    flex-direction: column;
    padding: 0 50px;
    width: 100%;
}

.formBx .formBx__form.signupForm {
    top: 100%;
    transition-delay: 0s;
}

.slide .formBx .formBx__form.signupForm {
    top: 0;
    transition-delay: 1s;
}

.formBx .formBx__form.signinForm {
    top: 0;
    transition-delay: 1s;
}

.slide .formBx .formBx__form.signinForm {
    top: -100%;
    transition-delay: 0s;
}

.formBx .formBx__form form h3 {
    margin-bottom: 30px;
    font-size: 1.4em;
    font-weight: 600;
    color: #333;
}

.formBx .formBx__form form input {
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    outline: none;
    font-size: .8em;
    text-transform: uppercase;
    border: 1px solid #333;
    letter-spacing: .1em;
}

.formBx .formBx__form form input[type='submit'] {
    background: #03f9f4;
    border: none;
    color: #fff;
    max-width: 100%;
    cursor: pointer;
    font-weight: 500;
}

.formBx .signupForm form input[type='submit'] {
    background: #f43648;
}
</style>