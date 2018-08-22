module.exports = {
    register: (app) => {
        app.use("/", (req, res, next) => {
            console.log('App');
            req.Aid = Math.ceil( Math.random() * 1000);
            next();
        });
    }
}