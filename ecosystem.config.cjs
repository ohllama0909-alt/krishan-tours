module.exports = {
  apps: [
    {
      name: "krishantours",
      cwd: "/home/ubuntu/tours",
      script: "node_modules/next/dist/bin/next",
      args: "start -H 127.0.0.1 -p 3417",
      env: {
        NODE_ENV: "production",
        PORT: "3417",
        CONTACT_TO_EMAIL: "iwantu226@gmail.com",
        INQUIRY_DATA_DIR: "/home/ubuntu/tours-data/inquiries",
      },
      time: true,
      merge_logs: true,
      autorestart: true,
      restart_delay: 2000,
      max_memory_restart: "500M",
    },
  ],
};
