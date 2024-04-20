module.exports = async function (context, req) {
    context.res.json({
        title: "Hello from the API",
        items: [
            {
                name: "First Api Spring",
                createdDate: new Date().toDateString(),
                country: "India",
                message: "I am the first api response ever"
            }
        ]
    });
};