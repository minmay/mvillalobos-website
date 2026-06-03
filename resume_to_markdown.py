import yaml
import sys
from pathlib import Path

def generate_markdown(data):
    md = []
    
    # Header
    md.append(f"# {data.get('name', '').upper()}")
    email = data.get('email', '')
    mobile = data.get('mobile', '')
    if email or mobile:
        md.append(f"{email} | {mobile}")
    md.append("")

    # Introduction
    intro = data.get('introduction')
    if intro:
        md.append("## Summary")
        md.append(intro)
        md.append("")

    # Objective
    objective = data.get('objective')
    if objective:
        md.append("## Objective")
        for obj in objective:
            md.append(f"- {obj}")
        md.append("")

    # Experience
    history = data.get('history')
    if history:
        md.append("## Professional Experience")
        for job in history:
            name = job.get('name', '')
            loc = job.get('location', '')
            start = job.get('start', '')
            end = job.get('end', '')
            title = job.get('title', '')
            
            header = f"### {name}"
            if loc:
                header += f" ({loc})"
            md.append(header)
            
            dates = f"{start} - {end}" if start and end else f"{start or end}"
            md.append(f"**{title}** | {dates}")
            
            description = job.get('description', [])
            for item in description:
                prologue = item.get('prologue')
                if prologue:
                    md.append(f"\n{prologue}")
                
                accomplishments = item.get('accomplishments')
                if accomplishments:
                    for acc in accomplishments:
                        md.append(f"- {acc}")
            md.append("")

    # Education
    education = data.get('education')
    if education:
        md.append("## Education")
        for edu in education:
            name = edu.get('name', '')
            degree = edu.get('degree', '')
            start = edu.get('start', '')
            end = edu.get('end', '')
            md.append(f"- **{degree}**, {name} ({start}-{end})")
        md.append("")

    # Skills
    skills = data.get('skills')
    if skills:
        md.append("## Technical Skills")
        for skill in skills:
            md.append(f"- {skill}")
        md.append("")

    # Presentations
    presentations = data.get('presentations')
    if presentations:
        md.append("## Presentations")
        for pres in presentations:
            name = pres.get('name', '')
            link = pres.get('link', '')
            if link:
                md.append(f"- [{name}]({link})")
            else:
                md.append(f"- {name}")
        md.append("")

    # Affiliations
    affiliations = data.get('affiliations')
    if affiliations:
        md.append("## Affiliations")
        for aff in affiliations:
            name = aff.get('name', '')
            title = aff.get('title', '')
            start = aff.get('start', '')
            end = aff.get('end', '')
            md.append(f"### {name}")
            md.append(f"**{title}** | {start} - {end}")
            
            description = aff.get('description', [])
            for item in description:
                prologue = item.get('prologue')
                if prologue:
                    md.append(f"\n{prologue}")
                
                accomplishments = item.get('accomplishments')
                if accomplishments:
                    for acc in accomplishments:
                        md.append(f"- {acc}")
            md.append("")

    return "\n".join(md)

def main():
    yaml_path = Path("src/assets/resume/MVillalobosWorkHistory.yaml")
    if not yaml_path.exists():
        print(f"Error: File {yaml_path} not found.")
        sys.exit(1)

    try:
        with open(yaml_path, 'r') as f:
            data = yaml.safe_load(f)
    except Exception as e:
        print(f"Error parsing YAML: {e}")
        sys.exit(1)

    markdown_output = generate_markdown(data)
    print(markdown_output)

if __name__ == "__main__":
    main()
