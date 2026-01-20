import os
import re

def check_images(directory):
    img_pattern = re.compile(r'import\s+(\w+)\s+from\s+[\'"](.+?\.(?:png|jpg|jpeg|svg|webp))[\'"]')
    jsx_img_pattern = re.compile(r'<img\s+.*?src={?[\'"]?(.+?)[\'"]?}?.*?>')
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.jsx', '.js', '.css')):
                path = os.path.join(root, file)
                with open(path, 'r') as f:
                    content = f.read()
                    
                    # Check imports
                    for match in img_pattern.finditer(content):
                        var_name, img_path = match.groups()
                        full_img_path = os.path.abspath(os.path.join(root, img_path))
                        if not os.path.exists(full_img_path):
                            print(f"[BROKEN IMPORT] {path}: Variable '{var_name}' refers to missing file '{img_path}'")
                    
                    # Check direct src in JSX (excluding variables)
                    for match in jsx_img_pattern.finditer(content):
                        src = match.group(1)
                        if not src.startswith('{') and not src.startswith(('http', 'https', '/')):
                            full_img_path = os.path.abspath(os.path.join(root, src))
                            if not os.path.exists(full_img_path):
                                print(f"[BROKEN SRC] {path}: Broken path '{src}'")

if __name__ == "__main__":
    check_images('./src')
