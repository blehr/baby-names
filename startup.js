module.exports = {
  apps : [
      {
        name: "BabyNames",
        script: "./bin/www",
        watch: true,
        env: {
            "NODE_ENV": "production"
        }
      }
  ]
}