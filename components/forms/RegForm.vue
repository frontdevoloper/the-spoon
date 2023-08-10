<template>
    <form>
        <h3>Sign up</h3>
        <input type="text" placeholder="username">
        <input type="email" name="email" id="email-input" placeholder="email">
        <input type="password" placeholder="Password">
        <input type="password" placeholder="Confirm password">
        <input type="submit" value="Sign in">
        <a href="#" class="forgot">Forgot password</a>
    </form>
</template>

<style scoped>
.forgot {
    color: #333;
    letter-spacing: .05em;
    font-size: .8em;
}
</style>