import { DeleteIcon } from '@chakra-ui/icons'
import {
    ChakraProvider,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    ModalFooter,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import React from 'react'
import { api } from '../api';

export function DeleteAlert(detail) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    function Delete(id) {
        fetch(`${api.getUri()}recipes/${id}`, {
            method: 'DELETE'
        }).then((result) => {
            result.json().then((resp) => {
                console.warn(resp)
            })
        })

    }
    return (
        <>
            <Button bg='red.500' onClick={onOpen}>Smazat</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Smazat recept
                        <ModalCloseButton />
                    </ModalHeader>
                    <ModalBody>
                        <form
                            id="new-note"
                            onSubmit={(event) => {
                                event.preventDefault();
                                Delete(detail.detail._id);
                                window.location.href = `/`
                            }}
                        >
                            <FormControl>
                                <FormLabel>Určitě smazat recept {detail.detail.title}?</FormLabel>
                            </FormControl>
                        </form>
                    </ModalBody>

                    <ModalFooter>

                        <Button type="submit" form="new-note">
                            Smazat
                        </Button>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}