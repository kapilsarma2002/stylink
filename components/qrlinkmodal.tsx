'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from '@nextui-org/react'


const QRLinkModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <div className="w-full pb-8 pl-32 hover:underline hover:cursor-pointer text-xl">
      {/* <Button color="success" variant="flat" onPress={onOpen}>
        open
      </Button> */}
      <div className="text" onClick={onOpen}>
        Click here to link your profile to QR code
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Link</ModalHeader>
              <ModalBody>
                <Input
                  label="Link"
                  placeholder="Enter your profile link"
                  type="text"
                  variant="bordered"
                  className='text-black'
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}

export default QRLinkModal
