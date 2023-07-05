import Image from 'next/image';

export default function Home() {
  const blogs = [
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-06-01',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-06-01',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      date: '2023-06-01',
    },
  ];

  return (
    <main className="bg-bg flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-2xl justify-between items-left flex-col">
        <h3 className="text-md text-left text-text2">
          aldn.dev
        </h3>
        <p
          className="text-md text-text mt-8"
        >Hi I'm Alden. This is my personal site where I post about projects I'm working on and occasional brain dumps. Welcome :)
        </p>

        <h3 className="text-lg text-left text-text mt-32">
          Projects
        </h3>

        <div className='flex flex-col gap-8'>
          <h3 className="text-lg text-left text-text mt-32">
            Blogs
          </h3>
          <ul className='gap-8 flex flex-col'>
            {blogs.map((blog) => (
              <li key={blog.title} className='max-w-lg bg-gray flex flex-col gap-1'>
                <h3>
                  Blog 1
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-lg text-left text-text mt-32">
          What I'm listening to
        </h3>



      </div>
    </main>
  );
}
