import { h } from "@hydrophobefireman/ui-lib";

export function RichStringParser(props) {
  const data = props.data;
  return h(
    "span",
    { "data-rich": 1 },
    data.map((x) => get(x))
  );
}

function get(x) {
  const type = x.type;
  const value = x.value;
  switch (type) {
    case "sup":
    case "div":
    case "sub":
      return h(type, null, value);

    case "inline-img":
      return h(
        "span",
        { class: "opt-image-container" },
        h("img", { src: value, class: "opt-img" })
      );
    case "img":
      return h(
        "div",
        { style: "text-align:center" },
        h("img", { src: value, class: "opt-img" })
      );
    case "underline":
    case "bold":
      return h("span", { class: type }, value);
    case "text":
    default:
      return h("span", null, value);
  }
}

// function allDescendants(node) {
//   let ret = [];
//   for (var i = 0; i < node.childNodes.length; i++) {
//     var child = node.childNodes[i];
//     ret = ret.concat(allDescendants(child));
//   }
//   return ret.length ? ret : [node];
// }
// function walkNode(node) {
//   const childNodes = allDescendants(node);
//   const ret = [];
//   for (const child of childNodes) {
//     if (child.nodeName === "IMG") {
//       ret.push({ type: "inline-img", value: child.src });
//     } else {
//       const value = child.textContent.replace(/\n/g, "");
//       if (value.trim()) {
//         ret.push({ type: "text", value });
//       }
//     }
//   }
//   return ret;
// }
// function fix(x) {
//   return x
//     .map((y) => y.value)
//     .join("")
//     .trim()
//     .toLowerCase();
// }
// function makeQues(node) {
//   const [q, o1, o2, o3, o4, ans] = node;
//   const opt = [o1, o2, o3, o4].map(walkNode);
//   return [
//     {
//       question: walkNode(q),
//       options: opt,
//       correct: opt.indexOf(opt.find((x) => fix(x) === fix(walkNode(ans)))),
//     },
//   ];
// }
