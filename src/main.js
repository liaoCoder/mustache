import mustache from "./mustache";
// import mustache from "mustache";

// const templateStr = "我的名字叫{{name}}，我的年龄是{{age}}岁";
// const templateStr = `
//   <div>
//     <ul>
//       {{#students}}
//         <li>
//           学生{{name}}的爱好是
//           {{#hobbies}}
//             <p>{{.}}</p>
//           {{/hobbies}}
//         </li>
//       {{/students}}
//     </ul>
//   </div>
// `;
// const data = {
//   students: [
//     {
//       name: "don",
//       hobbies: ["篮球", "足球"],
//     },
//     {
//       name: "fiona",
//       hobbies: ["排球", "乒乓球"],
//     },
//   ],
// };

const templateStr = `
  <div>
    <p>{{name}}</p>
    <p>{{country.location.city}}</p>
  </div>
`;
const data = {
  name: "don",
  country: {
    location: {
      city: "中国",
    },
  },
};
const result = mustache.render(templateStr, data);
// console.log(result);
