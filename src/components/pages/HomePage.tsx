import { Button } from "../ui/button";

const HomePage = () => {
  return (
    <main className="relative flex flex-col h-[fit-content] text-gray-700 bg-[#f0f0f0]">
      <div className="flex gap-2 p-5 bg-[#ebebeb]"  style={{
          borderTopRightRadius: 5,
        }}>
        <p className="text-xl font-bold">Welcome!</p>
      </div>

      <div className="p-5 h-[100%]">
        <TakeQuiz/>
        <UpdatesComponent/>
      </div>
    </main>
  )
}

const TakeQuiz = () => {
  return (
    <div className="flex flex-col gap-2 bg-secondary-foreground p-5 rounded-md mb-5">
      <h1 className="font-bold text-lg">Take the quiz!</h1>
      <p className="text-sm font-light">Before you can create your account you must first take the quiz! To take the quiz click the button below. Once you have passed the quiz, you will be able to create your first character!</p>
      <Button className="w-[120px]">Take The Quiz!</Button>
    </div>
  )
}

const UpdatesComponent = () => {
  return (
    <div className="h-[100%] bg-secondary-foreground p-5 rounded-md mb-5">
      <h1 className="font-bold text-lg">Community Updates</h1>
      <p className="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis vitae mi in vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam elementum molestie erat efficitur laoreet. Vestibulum consequat tempus dolor sed hendrerit. Quisque vitae sapien quis sem vehicula bibendum. Duis consectetur tincidunt enim ut aliquet. Quisque ligula dui, pellentesque quis aliquam ut, interdum id sapien. Phasellus risus arcu, faucibus et tincidunt in, sollicitudin quis est. Duis et dolor eu nunc consectetur aliquet. Duis neque dui, sagittis sit amet eros condimentum, ultricies interdum sem. In condimentum lacus bibendum felis condimentum gravida. Nulla a dapibus magna. Integer congue, ex ac rutrum mollis, lectus eros feugiat dolor, in pretium ligula magna quis massa.

Donec sed tempus nulla, at convallis tellus. Vivamus ornare nibh at velit mattis, sit amet gravida metus porta. Donec vehicula sem felis. Donec elementum mi sapien, non rhoncus felis tincidunt et. Proin vel lacus non risus imperdiet lacinia vel et lacus. Quisque aliquam elit eget tristique aliquam. Sed ut velit neque. Cras erat libero, efficitur vel volutpat vel, luctus ac ligula. Sed semper tortor sed diam rutrum sagittis. Donec sagittis libero et turpis malesuada pulvinar. Cras aliquam purus ante, vitae sodales urna ullamcorper ac. Maecenas sodales erat ut libero dignissim, at venenatis velit dignissim. Phasellus non pellentesque felis, ut ultricies libero. Mauris suscipit laoreet augue quis blandit. Pellentesque sit amet massa ex. Donec auctor nibh urna, quis vestibulum odio ullamcorper vel.

In quis massa vel quam gravida dignissim. Sed vel tortor tortor. Aliquam id fringilla tortor, eget volutpat risus. Vestibulum nec ornare ex. Vivamus dolor diam, dignissim non tincidunt non, mollis venenatis sem. Praesent nec imperdiet est. Sed nec convallis mauris. Ut ullamcorper finibus justo sed dictum. Aenean sagittis at eros nec iaculis.

Vivamus libero tellus, varius eu magna et, pulvinar volutpat velit. Nulla tempus auctor velit, ac euismod augue tincidunt eget. Fusce non purus mollis, maximus ex non, volutpat lacus. Vivamus vel tincidunt est, at euismod sem. Aenean in tempus dolor. Sed tincidunt eros et volutpat maximus. Curabitur hendrerit mollis magna. Sed interdum dignissim luctus. Suspendisse rhoncus id ante ut gravida. Suspendisse sodales nisl vitae risus aliquet, id feugiat nisi aliquet. Mauris sed hendrerit lorem, varius aliquam magna. Nam dictum posuere odio, eu vestibulum odio placerat quis. Ut maximus risus eget velit maximus aliquam. Nullam iaculis justo ac ornare tempor. Vivamus porta posuere nulla id lacinia. Mauris feugiat ultrices ex eget bibendum.

Proin pellentesque sapien et risus semper egestas. Integer commodo sapien nec nulla tincidunt, a dignissim mi pharetra. Vivamus at massa eleifend, imperdiet mauris id, placerat quam. Phasellus volutpat tortor ut leo cursus, ut faucibus mi luctus. Cras quis rutrum nulla. Pellentesque imperdiet sed ex eu aliquet. Integer auctor tristique posuere. Sed eleifend justo urna, sit amet tincidunt nunc rhoncus id. Nam suscipit bibendum tellus. Praesent et placerat nulla. Nulla facilisi. Proin pharetra pulvinar elit. Nulla posuere nibh at elit aliquam, vel dictum lorem tempor. Pellentesque a congue mi. Suspendisse iaculis blandit est et viverra. Cras sit amet dignissim libero.</p>
<p className="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis vitae mi in vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam elementum molestie erat efficitur laoreet. Vestibulum consequat tempus dolor sed hendrerit. Quisque vitae sapien quis sem vehicula bibendum. Duis consectetur tincidunt enim ut aliquet. Quisque ligula dui, pellentesque quis aliquam ut, interdum id sapien. Phasellus risus arcu, faucibus et tincidunt in, sollicitudin quis est. Duis et dolor eu nunc consectetur aliquet. Duis neque dui, sagittis sit amet eros condimentum, ultricies interdum sem. In condimentum lacus bibendum felis condimentum gravida. Nulla a dapibus magna. Integer congue, ex ac rutrum mollis, lectus eros feugiat dolor, in pretium ligula magna quis massa.

Donec sed tempus nulla, at convallis tellus. Vivamus ornare nibh at velit mattis, sit amet gravida metus porta. Donec vehicula sem felis. Donec elementum mi sapien, non rhoncus felis tincidunt et. Proin vel lacus non risus imperdiet lacinia vel et lacus. Quisque aliquam elit eget tristique aliquam. Sed ut velit neque. Cras erat libero, efficitur vel volutpat vel, luctus ac ligula. Sed semper tortor sed diam rutrum sagittis. Donec sagittis libero et turpis malesuada pulvinar. Cras aliquam purus ante, vitae sodales urna ullamcorper ac. Maecenas sodales erat ut libero dignissim, at venenatis velit dignissim. Phasellus non pellentesque felis, ut ultricies libero. Mauris suscipit laoreet augue quis blandit. Pellentesque sit amet massa ex. Donec auctor nibh urna, quis vestibulum odio ullamcorper vel.

In quis massa vel quam gravida dignissim. Sed vel tortor tortor. Aliquam id fringilla tortor, eget volutpat risus. Vestibulum nec ornare ex. Vivamus dolor diam, dignissim non tincidunt non, mollis venenatis sem. Praesent nec imperdiet est. Sed nec convallis mauris. Ut ullamcorper finibus justo sed dictum. Aenean sagittis at eros nec iaculis.

Vivamus libero tellus, varius eu magna et, pulvinar volutpat velit. Nulla tempus auctor velit, ac euismod augue tincidunt eget. Fusce non purus mollis, maximus ex non, volutpat lacus. Vivamus vel tincidunt est, at euismod sem. Aenean in tempus dolor. Sed tincidunt eros et volutpat maximus. Curabitur hendrerit mollis magna. Sed interdum dignissim luctus. Suspendisse rhoncus id ante ut gravida. Suspendisse sodales nisl vitae risus aliquet, id feugiat nisi aliquet. Mauris sed hendrerit lorem, varius aliquam magna. Nam dictum posuere odio, eu vestibulum odio placerat quis. Ut maximus risus eget velit maximus aliquam. Nullam iaculis justo ac ornare tempor. Vivamus porta posuere nulla id lacinia. Mauris feugiat ultrices ex eget bibendum.

Proin pellentesque sapien et risus semper egestas. Integer commodo sapien nec nulla tincidunt, a dignissim mi pharetra. Vivamus at massa eleifend, imperdiet mauris id, placerat quam. Phasellus volutpat tortor ut leo cursus, ut faucibus mi luctus. Cras quis rutrum nulla. Pellentesque imperdiet sed ex eu aliquet. Integer auctor tristique posuere. Sed eleifend justo urna, sit amet tincidunt nunc rhoncus id. Nam suscipit bibendum tellus. Praesent et placerat nulla. Nulla facilisi. Proin pharetra pulvinar elit. Nulla posuere nibh at elit aliquam, vel dictum lorem tempor. Pellentesque a congue mi. Suspendisse iaculis blandit est et viverra. Cras sit amet dignissim libero.</p>
<p className="text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sagittis vitae mi in vulputate. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam elementum molestie erat efficitur laoreet. Vestibulum consequat tempus dolor sed hendrerit. Quisque vitae sapien quis sem vehicula bibendum. Duis consectetur tincidunt enim ut aliquet. Quisque ligula dui, pellentesque quis aliquam ut, interdum id sapien. Phasellus risus arcu, faucibus et tincidunt in, sollicitudin quis est. Duis et dolor eu nunc consectetur aliquet. Duis neque dui, sagittis sit amet eros condimentum, ultricies interdum sem. In condimentum lacus bibendum felis condimentum gravida. Nulla a dapibus magna. Integer congue, ex ac rutrum mollis, lectus eros feugiat dolor, in pretium ligula magna quis massa.

Donec sed tempus nulla, at convallis tellus. Vivamus ornare nibh at velit mattis, sit amet gravida metus porta. Donec vehicula sem felis. Donec elementum mi sapien, non rhoncus felis tincidunt et. Proin vel lacus non risus imperdiet lacinia vel et lacus. Quisque aliquam elit eget tristique aliquam. Sed ut velit neque. Cras erat libero, efficitur vel volutpat vel, luctus ac ligula. Sed semper tortor sed diam rutrum sagittis. Donec sagittis libero et turpis malesuada pulvinar. Cras aliquam purus ante, vitae sodales urna ullamcorper ac. Maecenas sodales erat ut libero dignissim, at venenatis velit dignissim. Phasellus non pellentesque felis, ut ultricies libero. Mauris suscipit laoreet augue quis blandit. Pellentesque sit amet massa ex. Donec auctor nibh urna, quis vestibulum odio ullamcorper vel.

In quis massa vel quam gravida dignissim. Sed vel tortor tortor. Aliquam id fringilla tortor, eget volutpat risus. Vestibulum nec ornare ex. Vivamus dolor diam, dignissim non tincidunt non, mollis venenatis sem. Praesent nec imperdiet est. Sed nec convallis mauris. Ut ullamcorper finibus justo sed dictum. Aenean sagittis at eros nec iaculis.

Vivamus libero tellus, varius eu magna et, pulvinar volutpat velit. Nulla tempus auctor velit, ac euismod augue tincidunt eget. Fusce non purus mollis, maximus ex non, volutpat lacus. Vivamus vel tincidunt est, at euismod sem. Aenean in tempus dolor. Sed tincidunt eros et volutpat maximus. Curabitur hendrerit mollis magna. Sed interdum dignissim luctus. Suspendisse rhoncus id ante ut gravida. Suspendisse sodales nisl vitae risus aliquet, id feugiat nisi aliquet. Mauris sed hendrerit lorem, varius aliquam magna. Nam dictum posuere odio, eu vestibulum odio placerat quis. Ut maximus risus eget velit maximus aliquam. Nullam iaculis justo ac ornare tempor. Vivamus porta posuere nulla id lacinia. Mauris feugiat ultrices ex eget bibendum.

Proin pellentesque sapien et risus semper egestas. Integer commodo sapien nec nulla tincidunt, a dignissim mi pharetra. Vivamus at massa eleifend, imperdiet mauris id, placerat quam. Phasellus volutpat tortor ut leo cursus, ut faucibus mi luctus. Cras quis rutrum nulla. Pellentesque imperdiet sed ex eu aliquet. Integer auctor tristique posuere. Sed eleifend justo urna, sit amet tincidunt nunc rhoncus id. Nam suscipit bibendum tellus. Praesent et placerat nulla. Nulla facilisi. Proin pharetra pulvinar elit. Nulla posuere nibh at elit aliquam, vel dictum lorem tempor. Pellentesque a congue mi. Suspendisse iaculis blandit est et viverra. Cras sit amet dignissim libero.</p>
    </div>
  )
}

export default HomePage;