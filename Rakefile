task :build do
  system "npm run build"
end

namespace "heroku" do

  desc "deploy to heroku"
  task :deploy => :build do
    root = "/tmp/react_govuk_tmp"

    system(<<-SCRIPT)
      rm -rf #{root}
      mkdir #{root}
      mkdir #{root}/images/icons
      cp -r ./dist #{root}
      cp -r ./public #{root}
      cp -r node_modules/govuk_frontend_toolkit/images #{root}/images/icons
      cp index.html #{root}
      cp package.json #{root}
      cp Procfile #{root}
      cp prodServer.js #{root}
      cd #{root}
      git init
      git add .
      git commit -m"heroku build"
      echo "hi markymark!"
      heroku login
      git remote add heroku https://git.heroku.com/quiet-coast-92855.git
      git push --force heroku master
    SCRIPT
  end

end