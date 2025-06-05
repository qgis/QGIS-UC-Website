help:
	@echo "QGIS UC Website"
	@echo
	@echo "Brought to you by Kartoza (Pty) Ltd."
	@echo
	@echo "Help for using this Makefile"
	@echo
	@echo "For detailed help please visit:"
	@echo "https://github.com/QGIS/QGIS-UC-Website"
	@echo
	@echo "------------------------------------------------------------------"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort  | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m - %s\n", $$1, $$2}'

# ----------------------------------------------------------------------------
#    P R O D U C T I O N     C O M M A N D S
# ----------------------------------------------------------------------------

build: ## Build the site for uc2026.qgis.org
	@echo
	@echo "------------------------------------------------------------------"
	@echo "Building site in production"
	@echo "------------------------------------------------------------------"
	sh ./scripts/get_commit_hash.sh
	hugo --config config.toml,config/config.prod.toml


deploy: ## Deploy the site for uc2026.qgis.org
	@echo
	@echo "------------------------------------------------------------------"
	@echo "Deploy site in production"
	@echo "------------------------------------------------------------------"
	git pull && rm -rf archive; mkdir archive; mv public_prod archive; make build

revert-deploy: ## Revert the site for uc2026.qgis.org
	@echo
	@echo "------------------------------------------------------------------"
	@echo "Revert to the previous state in production"
	@echo "------------------------------------------------------------------"
	rm -rf public_prod; cp -r archive/public_prod ./

# ----------------------------------------------------------------------------
#    D E V E L O P M E N T     C O M M A N D S
# ----------------------------------------------------------------------------

hugo-dev-build: ## Build the site locally and run a python server at localhost:8000 with hugo
	@echo
	@echo "------------------------------------------------------------------"
	@echo "Building site in development"
	@echo "------------------------------------------------------------------"
	hugo --config config.toml,config/config.dev.toml
	python3 -m http.server 8000 -d public_dev

hugo-run-dev: ## Run the server at localhost:1313 with hugo
	@echo
	@echo "------------------------------------------------------------------"
	@echo "Building site in development"
	@echo "------------------------------------------------------------------"
	hugo server --config config.toml,config/config.dev.toml


