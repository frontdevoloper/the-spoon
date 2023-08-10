export default defineEventHandler(async (event) => {
    console.log('Test put methood');
    const body = await readBody(event);
    return { body }
});