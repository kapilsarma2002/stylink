'use client'
import { Accordion, AccordionItem } from '@nextui-org/react'

const AccordionComp = () => {
  const details = [
    {
      title: "Size & Fit",
      items: [
        "Fits small; we recommend ordering a half size up",
        "Mid-weight, non-stretchy fabric",
        "Designed for a mini length",
      ],
    },
    {
      title: "Shipping & Returns",
      items: [
        "Free shipping & returns",
        "Free, no-hassle returns",
        "Complimentary gift packaging",
        "Ships within 24 hours!",
      ],
    },
    {
      title: "Designer Notes",
      items: [
        "Fits small; we recommend ordering a half size up",
        "Mid-weight, non-stretchy fabric",
        "Designed for a mini length",
      ],
    },
  ]
  return (
    <div className="w-full">
      <Accordion
        className="-mx-1 mt-2"
        itemClasses={{
          title: 'text-black',
          content: 'pt-0 pb-6 text-base',
        }}
        items={details}
      >
        {details
          ? details.map(({ title, items }) => (
              <AccordionItem key={title} title={title}>
                <ul className="list-inside list-disc">
                  {items.map((item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </AccordionItem>
            ))
          : []}
      </Accordion>
    </div>
  )
}

export default AccordionComp
