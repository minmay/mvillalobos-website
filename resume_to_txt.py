# /// script
# dependencies = ["PyYAML"]
# ///

import yaml
import sys
from pathlib import Path

def generate_text(data):
    txt = []
    
    # Header
    name = data.get('name', '').upper()
    txt.append(name)
    txt.append("=" * len(name))
    
    email = data.get('email', '')
    mobile = data.get('mobile', '')
    if email or mobile:
        txt.append(f"{email} | {mobile}")
    txt.append("")

    # Introduction
    intro = data.get('introduction')
    if intro:
        txt.append("SUMMARY")
        txt.append("-" * len("SUMMARY"))
        txt.append(intro)
        txt.append("")

    # Objective
    objective = data.get('objective')
    if objective:
        txt.append("OBJECTIVE")
        txt.append("-" * len("OBJECTIVE"))
        for obj in objective:
            txt.append(f"* {obj}")
        txt.append("")

    # Experience
    history = data.get('history')
    if history:
        txt.append("PROFESSIONAL EXPERIENCE")
        txt.append("-" * len("PROFESSIONAL EXPERIENCE"))
        for job in history:
            name = job.get('name', '')
            loc = job.get('location', '')
            start = job.get('start', '')
            end = job.get('end', '')
            title = job.get('title', '')
            
            line = f"{name}"
            if loc:
                line += f" ({loc})"
            txt.append(line)
            
            dates = f"{start} - {end}" if start and end else f"{start or end}"
            txt.append(f"Title: {title}")
            txt.append(f"Dates: {dates}")
            
            description = job.get('description', [])
            for item in description:
                prologue = item.get('prologue')
                if prologue:
                    txt.append(f"\n{prologue}")
                
                accomplishments = item.get('accomplishments')
                if accomplishments:
                    for acc in accomplishments:
                        txt.append(f"* {acc}")
            txt.append("")

    # Education
    education = data.get('education')
    if education:
        txt.append("EDUCATION")
        txt.append("-" * len("EDUCATION"))
        for edu in education:
            name = edu.get('name', '')
            degree = edu.get('degree', '')
            start = edu.get('start', '')
            end = edu.get('end', '')
            txt.append(f"* {degree}, {name} ({start}-{end})")
        txt.append("")

    # Skills
    skills = data.get('skills')
    if skills:
        txt.append("TECHNICAL SKILLS")
        txt.append("-" * len("TECHNICAL SKILLS"))
        for skill in skills:
            txt.append(f"* {skill}")
        txt.append("")

    # Presentations
    presentations = data.get('presentations')
    if presentations:
        txt.append("PRESENTATIONS")
        txt.append("-" * len("PRESENTATIONS"))
        for pres in presentations:
            name = pres.get('name', '')
            link = pres.get('link', '')
            if link:
                txt.append(f"* {name} ({link})")
            else:
                txt.append(f"* {name}")
        txt.append("")

    # Affiliations
    affiliations = data.get('affiliations')
    if affiliations:
        txt.append("AFFILIATIONS")
        txt.append("-" * len("AFFILIATIONS"))
        for aff in affiliations:
            name = aff.get('name', '')
            title = aff.get('title', '')
            start = aff.get('start', '')
            end = aff.get('end', '')
            txt.append(f"{name}")
            txt.append(f"Title: {title} | {start} - {end}")
            
            description = aff.get('description', [])
            for item in description:
                prologue = item.get('prologue')
                if prologue:
                    txt.append(f"\n{prologue}")
                
                accomplishments = item.get('accomplishments')
                if accomplishments:
                    for acc in accomplishments:
                        txt.append(f"* {acc}")
            txt.append("")

    return "\n".join(txt)

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

    text_output = generate_text(data)
    print(text_output)

if __name__ == "__main__":
    main()
