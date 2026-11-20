.PHONY: validate index test api hugo

validate:
	python scripts/validate_content.py

index:
	python scripts/build_search_index.py

test:
	python -m unittest discover -s tests -v

api:
	python -m backend.app

hugo:
	hugo server -D --port 1313
