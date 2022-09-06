import os, shutil

def changeString(newIndex, name, asset, indexShift=0):
    first = newIndex[0:indexShift]
    newIndex = newIndex[indexShift:]
    imageIndex = newIndex.find(name)
    key = newIndex[
        imageIndex
        + len(name)
        + 2 : imageIndex
        + len(name)
        + 2
        + newIndex[imageIndex + len(name) + 2 :].find('"')
    ]
    assets = "/assets" if asset else ""
    newIndex = (
        newIndex[: imageIndex + len(name) + 2]
        + "{% static "
        + f"'{assets+key}'"
        + " %}"
        + newIndex[
            imageIndex
            + len(name)
            + 2
            + newIndex[imageIndex + len(name) + 2 :].find('"') :
        ]
    )
    return first + newIndex


def main():
    dir_path = os.path.dirname(os.path.realpath(__file__))
    print(dir_path)
    viteIndexPath = dir_path + "/dist/index.html"
    viteAssetsPath = dir_path + "/dist/assets"
    djangoAssetsPath = dir_path + "/djangoApp/static/assets"
    djangoIndexPath = dir_path + "/djangoApp/templates/dist/index.html"
    newDjangoIndexPath = dir_path + "/djangoApp/templates/dist/"

    newIndex = ""
    with open(viteIndexPath, "r") as file:
        newIndex = "{% load static %}\n" + file.read()

    for src_dir, dirs, files in os.walk(djangoAssetsPath):
        for file in files:
            if not ("vite" in file):
                if os.path.exists(os.path.join(src_dir, file)):
                    os.remove(os.path.join(src_dir, file))

    for src_dir, dirs, files in os.walk(viteAssetsPath):
        for file in files:
            if not ("vite" in file):
                if os.path.exists(os.path.join(src_dir, file)):
                    shutil.copy(os.path.join(src_dir, file), djangoAssetsPath)

    newIndex = changeString(newIndex, "href", True, 0)
    newIndex = changeString(newIndex, "href", False, 200)
    newIndex = changeString(newIndex, "src", False, 0)

    if os.path.exists(djangoIndexPath):
        os.remove(djangoIndexPath)

    with open(djangoIndexPath, "w") as f:
        f.write(newIndex)


if __name__ == "__main__":
    main()
