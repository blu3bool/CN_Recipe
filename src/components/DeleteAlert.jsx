import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Button,
    useDisclosure
} from "@chakra-ui/react";
import React from 'react'
import { useNavigate } from "react-router-dom";
import { api } from '../api';

export function DeleteAlert({ title, id }) {
    const { isOpen, onClose, onOpen } = useDisclosure();
    const navigate = useNavigate();

    function Delete(id) {

        api
            .delete(`${api.getUri()}recipes/${id}`)
            .then(navigate(`/`));
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
                                Delete(id);

                            }}
                        >
                            <FormControl>
                                <FormLabel>Určitě smazat recept {title}?</FormLabel>
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