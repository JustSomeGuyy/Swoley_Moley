import { c as create_ssr_component, b as add_attribute, a as subscribe } from "./ssr.js";
import { w as writable } from "./index.js";
const CTAs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { dark } = $$props;
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0) $$bindings.dark(dark);
  return `<div class="flex items-center gap-4"><button${add_attribute("class", "specialBtn" + (dark ? " bg-[#181b34]" : ""), 0)}><p class="text-base sm:text-lg md:text-xl" data-svelte-h="svelte-1am8dmy">Contact Us</p></button> <button${add_attribute("class", "specialBtnDark", 0)} data-svelte-h="svelte-izlw59"><p class="text-base sm:text-lg md:text-xl">Get Started →</p></button></div>`;
});
const openModal = writable(false);
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_openModal;
  $$unsubscribe_openModal = subscribe(openModal, (value) => value);
  $$unsubscribe_openModal();
  return `<header class="flex flex-col relative z-20"><div class="max-w-[1400px] mx-auto w-full flex items-center justify-between p-4 py-6"><a href="/" data-svelte-h="svelte-oxrty4"><h1 class="font-semibold">Swoley
				<span class="text-indigo-400">Moley</span></h1></a> <button class="md:hidden grid place-items-center" data-svelte-h="svelte-csipgd"><i class="fa-solid fa-bars"></i></button> <nav class="hidden md:flex items-center gap-4 lg: gap-6" data-svelte-h="svelte-1yka4cj"><a href="#product" class="duration-200 hover:text-indigo-400 cursor-pointer">Product</a> <a href="#reviews" class="duration-200 hover:text-indigo-400 cursor-pointer">Reviews</a> <a href="#faqs" class="duration-200 hover:text-indigo-400 cursor-pointer">FAQs</a> <button class="specialBtn"><p>Start free today</p></button></nav></div></header>`;
});
export {
  CTAs as C,
  Header as H,
  openModal as o
};
