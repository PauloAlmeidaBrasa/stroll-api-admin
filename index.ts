import app from "./src/config/app"

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Internal API running on port ${port}`);
});
