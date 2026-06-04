# /// script
# dependencies = ["PyYAML"]
# ///

import yaml
import json
import sys
from pathlib import Path

def main():
    yaml_path = Path("src/assets/resume/MVillalobosWorkHistory.yaml")
    if not yaml_path.exists():
        print(f"Error: File {yaml_path} not found.", file=sys.stderr)
        sys.exit(1)

    try:
        with open(yaml_path, 'r') as f:
            # Load the YAML content into a Python dictionary
            data = yaml.safe_load(f)
        
        # Convert the dictionary to a JSON string with indentation for readability
        json_output = json.dumps(data, indent=2, ensure_ascii=False)
        print(json_output)
        
    except yaml.YAMLError as e:
        print(f"Error parsing YAML: {e}", file=sys.stderr)
        sys.exit(1)
    except Exception as e:
        print(f"An unexpected error occurred: {e}", file=sys.stderr)
        sys.exit(1)

if __name__ == "__main__":
    main()
