SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c # -c: Needed in .SHELLFLAGS. Default is -c.
.DEFAULT_GOAL := run

export

npmi:
	@pnpm i
npmi-%:
	@pnpm i $(*)
npmi_if_needed:
	@if [[ ! -e node_modules ]]; then \
		make npmi; \
	fi

clean:
	@rm -rf node_modules
# build-dev:
# 	@make _build opt=-dev
# build-stg:
# 	@make _build opt=-stg
# build-prd:
# 	@make _build opt=-prd
build: npmi_if_needed
	@pnpm run build$(opt)

run: npmi_if_needed open_browser
	@pnpm run dev

open_browser:
	@open "http://localhost:3000"
